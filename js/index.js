var toggle_btn=document.getElementById('toggle_btn');
var srt=false;
toggle_btn.addEventListener('click',function(){
	if(!srt){
		carts_data_show_toggle();
		document.getElementById('show_carts_item').style.display="block";
		srt=true;
	}else{
		document.getElementById('show_carts_item').style.display="none";
		srt=false;
	}

	// var show_data=document.createElement("div");
	// show_data.className='single_task'
});

function carts_data_show_toggle(){
	var carts=JSON.parse(localStorage.getItem('carts',));
	let show_id=document.getElementById('show_carts_item');
	// var total_price_c=document.getElementById('total_price_1');

	// var catrs_total=0;
	show_id.innerHTML='';
	for(var i=0;i<carts.length;i++){
		let name=carts[i].name
		let price=carts[i].price
		let quantity=carts[i].quantity
		let subtotal=price*quantity
		 // catrs_total  += subtotal


		// show_id.innerHTML +='<div class="col-sm-3 col-md-3 col-lg-3 border_class"><p>'+name+'</p><p>'+price+'</p><p>'+quantity+'</p></div>';
		show_id.innerHTML +='<div class="card"><ul><li> name: '+name+'</li><li> Price:'+price+'</li><li>Quantity:'+quantity+'</li></ul></div>'
		
	}

	// total_price_c.innerHTML =catrs_total;

}




function singleFetchItem(){
	var productDatas = JSON.parse(localStorage.getItem('productDatas'));
	
	total_product_show.innerHTML='';
	for(var i=0;i<productDatas.length;i++){
		let name=productDatas[i].productName;
		let unitPrice=productDatas[i].productPrice;
		let quantity=productDatas[i].productQuantity;

		// single_product_show.innerHTML +='<div class="col-sm-4 col-md-4 col-lg-4"><div class="single_product"><p>'+name+'</p></div></div>';
		total_product_show.innerHTML +=
		'<div class="col-sm-3 text-center single_product"><div class="card"><p>'+name+'</p><p>'+unitPrice+'</p><button type="submit"  class="Buy_item btn btn-primary" onclick="add_to_cart(\''+i+'\')">Buy Now</button></div></div>';
	}

}

function add_to_cart(index){
	var productDatas = JSON.parse(localStorage.getItem('productDatas'));
	// console.log (productDatas[index])
	let obj = {
		name:productDatas[index].productName,
		price:productDatas[index].productPrice,
		quantity:1,
	}

	if(localStorage.getItem('carts')===null){
		var carts = [];
		carts.push(obj);
		localStorage.setItem('carts', JSON.stringify(carts));
	}
	else{
		var carts = JSON.parse(localStorage.getItem('carts'));
		carts.push(obj);
		localStorage.setItem('carts', JSON.stringify(carts));
	}

	// console.log(carts)

	

}
