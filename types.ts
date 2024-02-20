//Webtoon 타입 지정
export interface Webtoon {
  webtoonId: number;
  title: string;
  author: string;
  img: string;
  fanCount: number;
}

export type RootStackParamList= {
  One: undefined;
  Two: undefined;
  Three: undefined;
}