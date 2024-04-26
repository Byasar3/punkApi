export type Beer = {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string | null;
  abv: number | null;
  ibu: number | null;
  target_fg: number | null;
  target_og: number | null;
  ebc: number | null;
  srm: number | null;
  ph: number | null;
  attenuation_level: number | null;
  volume: Volume | null;
  boil_volume: Volume | null;
  method: Method | null;
  ingredients: Ingredients | null;
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
};

type Ingredients = {
  malt: Malt[];
  hops: Hop[];
  yeast: string | null;
};

type Hop = {
  name: string;
  amount: Volume;
  add: string;
  attribute: string;
};

type Malt = {
  name: string;
  amount: Volume;
};

type Method = {
  mash_temp: MashTemp[] | null;
  fermentation: Fermentation | null;
  twist?: any;
};

type Fermentation = {
  temp: Volume;
};

type MashTemp = {
  temp: Volume | null;
  duration: number | null;
};

type Volume = {
  value: number | null;
  unit: string;
};

export default Beer;
