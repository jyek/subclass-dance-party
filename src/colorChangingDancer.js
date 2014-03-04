var ColorChangingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

ColorChangingDancer.prototype = Object.create(Dancer.prototype);

ColorChangingDancer.prototype.constructor = ColorChangingDancer;

ColorChangingDancer.prototype.step = function(){
  this._top = Math.random()*window.innerHeight;
  this._left = Math.random()*window.innerWidth;
  this.setPosition();
  this.changeColor();

  Dancer.prototype.step.call(this);
};
