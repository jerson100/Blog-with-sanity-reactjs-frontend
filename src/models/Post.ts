import { User } from "./User";

export interface Post {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  author: User;
  body: Body[];
  categories: Category[];
  mainImage: MainImage;
  publishedAt: string;
  slug: Slug;
  title: string;
}

export interface Author {
  _ref: string;
  _type: string;
}

export interface Body {
  _key: string;
  _type: string;
  children?: Child[];
  markDefs?: MarkDef[];
  style?: string;
  asset?: Author;
}

export interface Child {
  _key: string;
  _type: string;
  marks: string[];
  text: string;
}

export interface MarkDef {
  _key: string;
  _type: string;
}

export interface Category {
  _createdAt: string;
  _id: string;
  title: string;
  description?: string;
  _key: string;
  _ref: string;
  _type: string;
}

export interface MainImage {
  _type: string;
  asset: Author;
}

export interface Slug {
  _type: string;
  current: string;
}
