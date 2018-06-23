{
  class Hoge {
    f() {
      //this:Hoge→undefined
    }
  }

  const f = new Hoge().f;
  f();
}