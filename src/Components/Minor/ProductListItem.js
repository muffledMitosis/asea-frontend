import TrashIcon from "../../assets/icons/delete-icon.svg";
import EditIcon from "../../assets/icons/edit-icon.svg";
import StarIcon from "../../assets/icons/star.svg";
import StarredIcon from "../../assets/icons/starred.svg";

function IconButton(props){
	return (
		<button onClick={props.onClick} className="mr-2">
			<img src={props.icon} />
		</button>
	);
}

function ProductListItem(props){
	return (
		<tr className="border-b text-t-black">
			<td className="text-t-dark-gray">{props.sku}</td>
			<td><img src={props.img} className="w-14 my-6 rounded-md" /></td>
			<td>{props.product_name}</td>
			<td>{props.price}</td>
			<td>
				<div className="flex">
					<IconButton icon={TrashIcon} />
					<IconButton icon={EditIcon} />
					<IconButton icon={StarIcon} />
				</div>
			</td>
		</tr>
	);
}

export default ProductListItem;