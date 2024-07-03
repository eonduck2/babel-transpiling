const add = (a: number, b: number): number => {
  const result = a + b;
  return result;
};

interface ITruth {
  name: string;
  age: number;
  job: `닌자`;
}

const minam = (): ITruth => {
  const obj: ITruth = {
    name: "이종수",
    age: 99,
    job: `닌자`,
  };
  return obj;
};
