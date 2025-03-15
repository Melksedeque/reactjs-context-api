import { useState, useEffect } from 'react';
import { RacaInfo } from '../api/types';

interface UseApiReturn {
  racas: RacaInfo[];
  todasRacas: string[];
  loading: boolean;
  error: string | null;
}

export const useApi = (): UseApiReturn => {
  const [racas, setRacas] = useState<RacaInfo[]>([]);
  const [todasRacas, setTodasRacas] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRacas = async () => {
      try {
        const response = await fetch('https://api.thedogapi.com/v1/breeds', {
          headers: {
            'x-api-key': 'live_97LgcKCUuEvxnXh54JqK4qqkSGE4wQBJNAcUAxjTbzTWXpI4cUoWPAePEtovZ9Av'
          }
        });
        const data = await response.json();
        setRacas(data);
      } catch (error) {
        setError('Não foi possível obter informações sobre as raças');
        console.error('Erro ao buscar informações sobre raças:', error);
      }
    };

    const fetchTodasRacas = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await response.json();
        setTodasRacas(Object.keys(data.message).map(raca => raca.toLowerCase()));
      } catch (error) {
        setError('Não foi possível obter a lista de raças');
        console.error('Erro ao buscar todas as raças:', error);
      }
    };

    Promise.all([fetchRacas(), fetchTodasRacas()]).finally(() => {
      setLoading(false);
    });
  }, []);

  return { racas, todasRacas, loading, error };
};