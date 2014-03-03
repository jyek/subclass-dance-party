// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this._top = top;
  this._left = left;
  this._timeBetweenSteps = timeBetweenSteps;

  this.step();
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition();
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  console.log('step');
  console.log(this);

  var wrap = function(func, context){
    return function(){
      func.call(context);
    };
  };

  setTimeout( wrap(this.step, this), this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  this.$node.css({
    top: this._top,
    left: this._left
  });
};