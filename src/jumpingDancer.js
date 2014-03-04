var JumpingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

JumpingDancer.prototype = Object.create(Dancer.prototype);

JumpingDancer.prototype.constructor = JumpingDancer;

JumpingDancer.prototype.step = function(){
  this._top = Math.random()*window.innerHeight;
  this._left = Math.random()*window.innerWidth;
  this.setPosition();

  Dancer.prototype.step.call(this);
};
