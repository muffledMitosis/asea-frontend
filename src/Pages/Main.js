import Header from "../Components/Header";
import ProductList from "../Components/ProductList";
import ProductListItem from "../Components/Minor/ProductListItem";
import SubHeader from "../Components/SubHeader";

import Product1 from "../assets/images/product-img-1.png";

function Main(){
	
	let items = [
		<ProductListItem sku="#CA25"
										 img={Product1}
										 product_name="Product-name"
										 price="$24.00"/>,
		<ProductListItem sku="#CA25"
										 img={Product1}
										 product_name="Product-name"
										 price="$24.00"/>,
		<ProductListItem sku="#CA25"
										 img={Product1}
										 product_name="Product-name"
										 price="$24.00"/>,
		<ProductListItem sku="#CA25"
										 img={Product1}
										 product_name="Product-name"
										 price="$24.00"/>,
	]
	

	let elem = <div>
		<Header />
		<SubHeader heading="PRODUCTS"/>
		<ProductList items={items} />
	</div>

	return elem;
}

export default Main;