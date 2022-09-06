import Header from "../Components/Header";
import ProductList from "../Components/ProductList";
import ProductListItem from "../Components/Minor/ProductListItem";
import SubHeader from "../Components/SubHeader";

import Product1 from "../assets/images/product-img-1.png";
import { useEffect } from "react";
import axios from "axios";

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
	
	useEffect(()=>{
		console.log("running use effect");
		axios.get('http://localhost:8080')
				 .then(resp=>console.log(resp))
				 .catch(e=>console.log(e));
	}, []);
	
	return (
		<div>
			<Header />
			<SubHeader heading="PRODUCTS"/>
			<ProductList items={items} />
		</div>
	);
}

export default Main;