import Header from "../Components/Header";
import ProductList from "../Components/ProductList";
import ProductListItem from "../Components/Minor/ProductListItem";
import SubHeader from "../Components/SubHeader";

function Main(){
	
	let items = [
		<ProductListItem sku="lks" />,
		<ProductListItem product_name="lmao" />,
		<ProductListItem />,
	]
	

	let elem = <div>
		<Header />
		<SubHeader heading="PRODUCTS"/>
		<ProductList items={items} />
	</div>

	return elem;
}

export default Main;