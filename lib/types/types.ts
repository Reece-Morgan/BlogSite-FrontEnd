export type BlogList = {
  message: string;
  response: BlogItem[];
}

export type BlogItem = {
  id: number;
  title: string;
  content: string;
  author: string;
  dataCreated: string;
  readLength: number;
}