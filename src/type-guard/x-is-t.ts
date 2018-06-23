{
  function xIsString(x: any): x is string {
    return true;
  }

  const s: any = 1;
  if (xIsString(s)) {
    //s:string→number
  }
}