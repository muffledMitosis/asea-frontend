function ProductListItem(props){
	return (
		<tr className="border-b">
			<td>{props.sku}</td>
			<td>{props.image}</td>
			<td>{props.product_name}</td>
			<td>{props.price}</td>
			<td>THE ICONS</td>
		</tr>
	);
}

export default ProductListItem;