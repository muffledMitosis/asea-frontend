import Header from "../Components/Header";
import ProductList from "../Components/ProductList";
import ProductListItem from "../Components/Minor/ProductListItem";
import SubHeader from "../Components/SubHeader";
import * as Util from "../Util/Util";

import Product1 from "../assets/images/product-img-1.png";
import { useEffect, useState } from "react";
import axios from "axios";
import BasicSpinner from "../Components/Minor/BasicSpinner";

function Main(){
	
	// let items = [
	// 	<ProductListItem sku="#CA25"
	// 									 img={Product1}
	// 									 product_name="Product-name"
	// 									 price="$24.00"/>,
	// 	<ProductListItem sku="#CA25"
	// 									 img={Product1}
	// 									 product_name="Product-name"
	// 									 price="$24.00"/>,
	// 	<ProductListItem sku="#CA25"
	// 									 img={Product1}
	// 									 product_name="Product-name"
	// 									 price="$24.00"/>,
	// 	<ProductListItem sku="#CA25"
	// 									 img={Product1}
	// 									 product_name="Product-name"
	// 									 price="$24.00"/>,
	// ]

	const [items, setItems] = useState("loading");
	
	useEffect(()=>{
		console.log("running use effect");
		axios.get('http://localhost:8080/products')
				 .then(resp=>{
								let allData = [];
								resp.data.forEach(item => {
									allData.push(Util.createListItem(item));
								});
								setItems(allData);
				 })
				 .catch(e=>console.log(e));
	}, []);
	
	return (
		<div>
			<Header />
			<SubHeader heading="PRODUCTS"/>
			{items == "loading" ? <div className="flex w-full justify-center mt-32"><BasicSpinner /></div> : <ProductList items={items} />}
		</div>
	);
}

export default Main;