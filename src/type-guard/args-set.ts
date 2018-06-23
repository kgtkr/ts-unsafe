{
  function f(x: { a: string | null }) {
    x.a = null;
  }

  const obj = { a: "str" };
  f(obj);
  //obj.a:string→null
}