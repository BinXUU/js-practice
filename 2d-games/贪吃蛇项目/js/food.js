(function () {
  var position='absolute';
  var elements=[];
  function Food(var options) {
    options = options||{};
    this.x=options.x;
    this.y=options.y;

    this.width = options.width || 20;
    this.height = options.height || 20;

    this.color = options.color || 'green';
  }

  Food.prototype.render=function () {
    document.createElement("div")
  }

  function remove() {

  }
})