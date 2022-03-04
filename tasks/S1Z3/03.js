
array = [{x:2, y:3},{x:-1, y:6},{x:0, y:8},{x:5, y:9}];
BaseObject = {x:Number, y:Number, sum: function(){return this.x+this.y}}; 

for(let i = 0; i < array.length; i++){
   console.log(BaseObject.sum.call(array[i]))}

