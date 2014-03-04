// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this._top = top;
  this._left = left;
  this._timeBetweenSteps = timeBetweenSteps;

  this.step();
  // now that we have defined the dancer object, we can start setting up 
  // important parts of it by calling the methods we wrote this one sets 
  // the position to some random default point within the body
  this.setPosition();
};

Dancer.prototype.step = function(){
  var wrap = function(func, context){
    return function(){
      func.call(context);
    };
  };

  setTimeout( wrap(this.step, this), this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(){
  this.$node.css({
    top: this._top,
    left: this._left
  });
};

Dancer.prototype.changeColor = function(){
  var border = 10+30*Math.random() + "px solid rgb(";
  for(var i = 0; i<3; i++, border += Math.round(Math.random()*255) + ",");
  this.$node.css({"border":border.replace(/,$/,')')});
};

Dancer.prototype.lineUp = function(i){
  this.$node.css({
    top: '50%',
    left: window.innerWidth / dancers.length * (i + 0.5)
  });
};

Dancer.prototype.HR11 = function(start, end){
  var url = ['img/allegra.png', 'img/christina.png', 'img/cowboy.png', 'img/fabrice.png',
  'img/justin.png', 'img/latif.png', 'img/michelin.png', 'img/stephan.png',
  'img/willson.png'];
  start = start || 0;
  end = end || url.length - 1;
  var index = start + Math.round(Math.random() * (end - start)) ;
  this.$node.css({
    'background-image':'url('+url[index]+')',
    'background-repeat':'no-repeat',
    'width':'30%',
    'height':'60%'
  });
};



