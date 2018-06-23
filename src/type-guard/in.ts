{
  function f(x: { x: number } | { a: number, b: number }) {
    if ("a" in x) {
      //x.b:number→undefined
    }
  }

  const obj = { x: 1, a: 1 };
  f(obj);
}