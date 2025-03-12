export interface RacaInfo {
  name: string;
  bred_for?: string;
  breed_group?: string;
  life_span?: string;
  temperament?: string;
  reference_image_id?: string;
}

export interface RacaDetalhada extends RacaInfo {
  imagem?: string;
}