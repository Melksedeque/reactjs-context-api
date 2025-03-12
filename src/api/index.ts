import axios from "axios";

const imagensApi = axios.create({
  baseURL: "https://dog.ceo/api"
});

const sobreApi = axios.create({
  baseURL: "https://api.thedogapi.com/v1",
  headers: {
    "x-api-key": "live_97LgcKCUuEvxnXh54JqK4qqkSGE4wQBJNAcUAxjTbzTWXpI4cUoWPAePEtovZ9Av",
  },
});

import { RacaInfo } from './types';

export const buscaSobreRacas = async (): Promise<RacaInfo[]> => {
  try {
    const response = await sobreApi.get("/breeds");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar informações sobre raças:", error);
    throw new Error("Não foi possível obter informações sobre as raças");
  }
};

export const buscaTodasRacas = async (): Promise<string[]> => {
  try {
    const response = await imagensApi.get("/breeds/list/all");
    return Object.keys(response.data.message)
      .map(raca => raca.toLowerCase())
      .sort();
  } catch (error) {
    console.error("Erro ao buscar lista de raças:", error);
    throw new Error("Não foi possível obter a lista de raças");
  }
};

export const buscaImagemPorRaca = async (raca: string): Promise<string> => {
  try {
    const response = await imagensApi.get(`/breed/${raca.toLowerCase()}/images/random`);
    return response.data.message;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      throw new Error(`Não foi possível encontrar imagens para a raça ${raca}`);
    }
    console.error("Erro ao buscar imagem da raça:", error);
    throw error;
  }
};