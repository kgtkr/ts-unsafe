{
  class Hoge {
    x: string | null = "str";
    setXNull() {
      this.x = null;
    }

    f() {
      if (this.x !== null) {
        this.setXNull();
        //this.x:string→null
      }
    }
  }
}