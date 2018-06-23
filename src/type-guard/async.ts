{
  async function sleep(ms: number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }

  class Hoge {
    x: string | null = "str";
    async f() {
      if (this.x !== null) {
        await sleep(1000);
        //this.x:string→null
      }
    }
  }

  const hoge = new Hoge();
  hoge.f();
  hoge.x = null;
}