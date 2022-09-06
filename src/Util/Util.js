import ProductListItem from "../Components/Minor/ProductListItem";

export const createListItem = rawData => {
	return <ProductListItem sku={rawData["SKU"]}
													img={""}
													product_name={rawData["Name"]}
													price={rawData["QTY"]}
													key={rawData["SKU"]} />
};