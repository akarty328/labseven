
var banana = {
  name: 'banana',
  price: 1.99
};
var eggs = {
  name: 'eggs',
  price: 2.99
};
var chocolate = {
  name: 'chocolate',
  price: 0.99
};
var coconut = {
  name: 'coconut',
  price: 3.99
};

var shoppingList = [banana, eggs, chocolate, coconut];

//var shoppingList = [];

//shoppingList.splice(0,0, banana, eggs, chocolate, coconut);

shoppingList.forEach(function(x) {
  console.log((x.name) + " - $" + (x.price).toFixed(2))
});

var total = 0;

for(var i = 0; i < shoppingList.length; i++){
  total=(shoppingList[i].price + total);
}
total=total * 1.06;
//applying tax to total
console.log('total price - $' + total.toFixed(2))
