var pizza = {
	crust: 'Thick',
	cheese: 'Parmesean',
	sauce: 'Tomato',
	addToppings: function(){
		console.log('Please add pepperoni and sausage');
	}
};
function orderPizza(){
	console.log('Crust: ' + pizza.crust);
	console.log('Cheese: ' + pizza.cheese);
	console.log('Sauce: ' + pizza.sauce);
	console.log('Toppings: ' + pizza.addToppings);
}
orderPizza();