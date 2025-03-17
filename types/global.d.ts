export {};

declare global {
  type Tag = string;

  interface Params {
    productId: string;
  }
  interface Device {
    device: string;
  }

  interface Product {
    name: string;
    price: number;
    tags: Tag[];
    images: [string];
    description: string;
    [key: string]: any;
  }
  interface Writer {
    image: string;
    nickname: string;
    id: number;
  }
  interface Comment {
    writer: Writer;
    updatedAt: string;
    createdAt: string;
    content: string;
    id: number;
  }
  interface ArticleWriter {
    nickname: string;
    id: number;
  }
  interface Article {
    updatedAt: string;
    createdAt: string;
    likeCount: number;
    writer: ArticleWriter;
    image: string;
    content: string;
    title: string;
    id: number;
  }
  type onClick = (e: MouseEvent<HTMLButtonElement>) => void;
}
