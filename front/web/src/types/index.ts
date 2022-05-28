import React from "react";

export interface IPost {
  base64: string;
  mb_id: string;
  post_category: string;
  post_content: string;
  post_dt: string;
  post_id: number;
  post_img: string;
  post_price: number;
  post_shipping: string;
  post_title: string;
  post_unit: string;
}

export interface ICard {
  img: string;
  title: string;
  seller: string;
  price: number;
  shipmentFee: string;
  unit: string;
  category: string;
  contents: string;
  postId: number;
}

export interface IUser {
  mb_id: string;
  mb_lati: number;
  mb_longi: number;
  mb_name: string;
  mb_pw: string;
  mb_type: number;
}

export interface ICardGrid {
  category: string;
  post: IPost[];
}

export interface ICoord {
  lat: number;
  lng: number;
}

export interface IPostItem {
  img: string;
  title: string;
  price: number;
  category: string;
  contents: string;
  unit: string;
  shipping: string;
  seller: string;
  onClose: () => void;
  postId: number;
}

export interface IModal {
  component: React.ReactNode;
  onCloseModal: () => void;
}

export interface ISelectList {
  data: string[];
  onChangeCategoryState: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface ITable {
  no: number;
  date: Date;
  title: string;
  seller: string;
  buyer: string;
  amount: number;
  price: number;
}

export interface IWrite {
  onCloseModal: () => void;
}
