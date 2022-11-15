export interface User {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  bio: Bio[];
  image: Image;
  name: string;
  slug: Slug;
}

export interface Bio {
  _key: string;
  _type: string;
  children: Child[];
  markDefs: MarkDef[];
  style: string;
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

export interface Image {
  _type: string;
  asset: Asset;
}

export interface Asset {
  _ref: string;
  _type: string;
}

export interface Slug {
  _type: string;
  current: string;
}
