var JumpingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

JumpingDancer.prototype = Object.create(Dancer.prototype);
JumpingDancer.prototype.constructor = JumpingDancer;

JumpingDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this._top = Math.random()*window.innerHeight;
  this._left = Math.random()*window.innerWidth;
  this.setPosition();

  Dancer.prototype.step.call(this);
};
