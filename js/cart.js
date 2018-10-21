


function carts_data_show(){
	var carts=JSON.parse(localStorage.getItem('carts',));
	let carts_product_show=document.getElementById('carts_product_show');
	var total_price_c=document.getElementById('total_price_1');

	var catrs_total=0;
	carts_product_show.innerHTML='';
	for(var i=0;i<carts.length;i++){
		let name=carts[i].name
		let price=carts[i].price
		let quantity=carts[i].quantity
		let subtotal=price*quantity
		 catrs_total  += subtotal


		carts_product_show.innerHTML +='<tr><td><a  onclick="cart_deleteproduct(\''+i+'\')"><i class="fa fa-trash"></i></a></td><td></td><td>'+name+"</td><td>"+price+"</td><td>"+quantity+"</td><td>"+subtotal+'</td></tr>';
		
	}

	total_price_c.innerHTML =catrs_total;

}

function cart_deleteproduct(delIndex){
	// console.log(delIndex);
	var carts=JSON.parse(localStorage.getItem('carts'));
	for(var i=0;i<carts.length;i++){
		if(parseInt(delIndex)===i){
			carts.splice(i,1)
		}
	}
	localStorage.setItem('carts', JSON.stringify(carts));
	carts_data_show();

	// preventDefault();
}