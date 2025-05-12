import { CartItem } from "./interfaces/cart-item.ts";

export class Product implements CartItem {
  constructor(public name: string, public price: number) {}
}