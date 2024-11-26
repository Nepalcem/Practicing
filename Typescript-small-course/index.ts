type Dish = {
  name: string;
  price: number;
};

type Order = {
  dish: Dish;
  status: string;
  id: number;
};

const menu = [
  {
    name: "doll",
    price: 10,
  },
  {
    name: "pizza",
    price: 12,
  },
  { name: "snack", price: 8 },
  {
    name: "drink",
    price: 5,
  },
];

let cashInRegister = 100;
let newOrderID = 0;
const orderQueue: Order[] = [];

function addNewDish(dishName: Dish) {
  menu.push(dishName);
}

function placeOrder(dishName: string) {
  const findDish = menu.find((el) => el.name === dishName);
  if (!findDish) {
    console.error(`${dishName} doesn't exist in the menu`);
    return;
  }
  cashInRegister += findDish.price;
  newOrderID += 1;
  const newOrder = { dish: findDish, status: "ordered", id: newOrderID };
  orderQueue.push(newOrder);
  return orderQueue;
}

function completeOrder(orderId: number) {
  const locateOrder = orderQueue.find((el) => el.id === orderId);
  if (!locateOrder) {
    console.error(`${orderId} doesn't exist in the menu`);
    return;
  }
  locateOrder.status = "completed";
  return locateOrder;
}

addNewDish({ name: "cofee", price: 5 });

placeOrder("cofee");
completeOrder(1);

console.log("Menu:", menu);
console.log("Cash:", cashInRegister);
console.log("Orders:", orderQueue);
