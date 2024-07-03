interface Itest {
  name: string;
  age: number;
  alive: boolean;
}

const testObj: Itest = {
  name: `이종수`,
  age: 222,
  alive: true,
};

const test = (testObj: object): object => {
  return testObj;
};

test(testObj);
