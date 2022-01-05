export interface IPlayTime {
  from: number;
  to: number;
}

export interface IPlayersNumb {
  from: number;
  to: number;
}

export interface IProduct {
  _id: string;
  __v: number;
  title: string;
  body: string;
  playTime: IPlayTime;
  playersNumb: IPlayersNumb;
  difficultyLevel: string;
  category: string;
  image: string;
  reservation?: number;
  prize?: number;
  suggestAge?: number;
  designer: string;
}

export interface IProductsData {
  data: IProduct[];
}
