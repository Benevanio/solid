// filepath: /home/bene-tesla-dev/cursos/typecript/005/index.ts
import { Order } from "./src/ocp/classes/Order.ts";
import { ShoppingCart } from "./src/ocp/classes/shopping_cart.ts";
import { Messaging } from "./src/ocp/service/messaging.ts";
import { Persistency } from "./src/ocp/service/persistency.ts";

import { TenPercentDiscount } from "./src/ocp/classes/discount.ts";

const tenPercentDiscountInstance = new TenPercentDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscountInstance);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem({ name: 'Camiseta', price: 49.91 });
shoppingCart.addItem({ name: 'Caderno', price: 9.91 });
shoppingCart.addItem({ name: 'Lápis', price: 5.59 });

console.log("Itens no carrinho:", shoppingCart.items);
console.log("Total sem desconto:", shoppingCart.total());
console.log("Total com desconto:", shoppingCart.totalWithDiscount());
console.log("Status do pedido:", order.orderStatus);

order.checkout();

console.log("Status do pedido após checkout:", order.orderStatus);