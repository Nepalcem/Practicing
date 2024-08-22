type Address = {
  street: string;
  house: number;
  apt: number;
};

type Person = {
  name: string;
  age: number;
  address?: Address;
};

const person1: Person = {
  name: "Mark",
  age: 37,
};
