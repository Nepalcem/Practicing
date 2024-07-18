type Dish = {
  name: string;
  price: number;
};

const menu = [
  {
    name: "roll",
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
const orderQueue = [];

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
  const newOrder = { dish: findDish, status: "ordered", orderId: newOrderID };
  orderQueue.push(newOrder);
  return orderQueue;
}

function completeOrder(orderId: number) {
  const locateOrder = orderQueue.find((el) => el.orderId === orderId);
  locateOrder.status = "completed";
  return locateOrder;
}

addNewDish({ name: "cofee", price: 5 });

placeOrder("cofee");
completeOrder(1);

console.log("Menu:", menu);
console.log("Cash:", cashInRegister);
console.log("Orders:", orderQueue);
