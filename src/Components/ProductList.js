function ProductList(props){
	return (
		<div className="mx-16">
			<table className="table-auto text-left w-full">
				<thead>
					<tr className="text-t-blue">
						<th scope="col" className="pl-0">SKU</th>
						<th scope="col">IMAGE</th>
						<th scope="col">PRODUCT NAME</th>
						<th scope="col">PRICE</th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody>
					{props.items}
				</tbody>
			</table>
		</div>
	);
}

export default ProductList;