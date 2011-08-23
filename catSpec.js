describe("Cat", function() {
  var cat;

  beforeEach(function() {
    cat = new Cat("Alonzo");
  });

  it("has a name", function() {
    expect(cat.name).toEqual("Alonzo");
  });

  it("returns meow when you call his name", function() {
    expect(cat.call("Alonzo")).toEqual("meow");
  });

  it("returns nothing when you call another name", function() {
    expect(cat.call("Annie")).toEqual("");
  })

  it("should return the same thing when using method passing through []", function() {
    expect(cat['call']('Alonzo')).toEqual("meow");
  });

  it("should return true to sleeping always", function() {
    expect(cat.sleeping).toBeTruthy();
  });

  it("should also return true when passing using []", function() {
    expect(cat["sleeping"]).toBeTruthy();
  });
});