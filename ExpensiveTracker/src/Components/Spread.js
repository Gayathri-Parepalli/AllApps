const Spread = () => {
  const obj = { Name: "hello", age: 20 };
  const obj2 = { Name: "uu", age: 99 };
  const obj1 = {};
  const data = { obj, obj2 };
  const data2 = Object.assign(obj1, obj);
  const arr = [1, 2, 3];
  const arr1 = [4, 5, 6];
  const arr2 = [7, 8, 9];
  const data3 = [...arr, ...arr1, ...arr2];
  console.log(data, data2, data3);
  return <div>Hello</div>;
};
export default Spread;
