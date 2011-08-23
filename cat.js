

function Cat(name) {
  this.name = name;

  this.sleeping = function() {
    return true;
  };

  this.call = function(name) {
    if(name === this.name) {
      return "meow";
    }
    else {
      return "";
    }
  };
};
