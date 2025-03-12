import axios from "axios";

const api = axios.create({
  baseURL: "https://api.thedogapi.com/v1",
  headers: {
    "x-api-key": "live_97LgcKCUuEvxnXh54JqK4qqkSGE4wQBJNAcUAxjTbzTWXpI4cUoWPAePEtovZ9Av",
  },
});

interface RacaInfo {
  name: string;
  bred_for?: string;
  breed_group?: string;
  life_span?: string;
  temperament?: string;
  reference_image_id?: string;
}

export const buscaSobreRacas = async (): Promise<RacaInfo[]> => {
  const response = await api.get("/breeds");
  return response.data;
};

export const buscaTodasRacas = async (): Promise<string[]> => {
  const response = await api.get("/breeds");
  return response.data.map((raca: RacaInfo) => raca.name.toLowerCase());
};

export const buscaImagemPorRaca = async (raca: string): Promise<string> => {
  const response = await api.get("/images/search", {
    params: {
      breed_name: raca,
      limit: 1,
    },
  });
  return response.data[0].url;
};