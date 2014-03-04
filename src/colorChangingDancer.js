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

Dancer.prototype.changeColor = function(){
  var border = 10+30*Math.random() + "px solid rgb(";
  for(var i = 0; i<3; i++, border += Math.round(Math.random()*255) + ",");
  this.$node.css({"border":border.replace(/,$/,')')});
};
