{
  function throwError(): string {
    throw new Error();
  }

  const x = throwError();//stringが返ってくると型は言っているのに例外を投げられた
}