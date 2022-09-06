import ArrowIcon from "../../../assets/icons/arrow.svg";

function ProductDataHeader(props){
	return (
		<div className="font-satoshi my-10 flex items-center">
			<div className=" font-bold text-3xl tracking-sub-header">PRODUCTS</div>
			<img className="mx-2" src={ArrowIcon} />
			<div className="font-bold text-t-blue text-lg">{props.text}</div>
		</div>
	);
}

export default ProductDataHeader;