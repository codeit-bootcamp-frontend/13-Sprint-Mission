export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  tags: string[];
  images: string[];
  ownerId: number;
  favoriteCount: number;
  createdAt: string;
  updatedAt: string;
  ownerNickname: string;
  isFavorite: boolean;
}

export interface CommentWriter {
  id: number;
  nickname: string;
  image: string | null;
}

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  writer: CommentWriter;
}
