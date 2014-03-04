var JumpingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer HR11"></span>');
  this.setPosition();
  this.HR11(0,1);
};

JumpingDancer.prototype = Object.create(Dancer.prototype);

JumpingDancer.prototype.constructor = JumpingDancer;

JumpingDancer.prototype.step = function(){
  var distance = function(x1,y1,x2,y2){
    return ((x2 - x1)^2 + (y2 - y1)^2)^0.5;
  };

  var dancers = window.dancers;
  var distances = [];
  for (var i = 0; i < dancers.length; i++){
    distances[i] = [];
    for (var j = i + 1; j < dancers.length; j++){
      var d1 = dancers[i];
      var d2 = dancers[j];
      distances[i][j] = distance(d1._left, d1._top, d2._left, d2._top);
    }
  }

  this._top += 30 * (Math.random() - 0.5) % window.innerWidth;
  this._left += 30 * (Math.random() - 0.5) % window.innerWidth;
  this.setPosition();
  Dancer.prototype.step.call(this);
};
