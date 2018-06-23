{
  class Hoge {
    isGet = false;
    get x(): string | null {
      if (!this.isGet) {
        this.isGet = true;
        return "str";
      } else {
        return null;
      }
    }
  }

  const hoge = new Hoge();
  if (hoge.x !== null) {
    //hoge.x:string→実際
  }
}