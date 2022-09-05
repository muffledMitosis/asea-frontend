import Header from "../Components/Header";
import ArrowIcon from "../assets/icons/arrow.svg";
import BasicButton from "../Components/Minor/BasicButton";

function NewProduct(){
	return (
		<div className="">
			<Header />

			{/* <div className="font-satoshi my-10 mx-4 flex items-center">
				<div className=" font-bold text-3xl tracking-sub-header">PRODUCTS</div>
				<img className="mx-2" src={ArrowIcon} />
				<div className="font-bold text-t-blue text-lg">Add new product</div>
			</div> */}

			<form className=" text-t-black flex w-full justify-center">
				<div className="max-w-3xl font-satoshi">

				<div className="font-satoshi my-10 flex items-center">
					<div className=" font-bold text-3xl tracking-sub-header">PRODUCTS</div>
					<img className="mx-2" src={ArrowIcon} />
					<div className="font-bold text-t-blue text-lg">Add new product</div>
				</div>

					<div className="flex font-satoshi items-center">
						<div className="w-16">SKU</div>
						<input className="w-64 h-8 bg-t-light-gray" type="text" />
					</div>
					<div className="flex font-satoshi items-center mt-8 justify-between">
						<div className="flex items-center">
							<div className="w-16">Name</div>
							<input className="w-64 h-8 bg-t-light-gray" type="text" />
						</div>
						<div className="flex items-center">
							<div className="w-16 ml-24">QTY</div>
							<input className="w-64 h-8 bg-t-light-gray" type="text" />
						</div>
					</div>

					<div className="mt-8">Product Description</div>
					<div className="text-xs text-t-dark-gray mt-2">A small description about the product</div>
					<input className="w-full h-32 mt-2 bg-t-light-gray" type="text" />

					<div className="flex mt-8">
						<div className="flex flex-col text-xs text-t-dark-gray">
							<div className="text-t-black text-base">Product Images</div>
							<div className="mt-2">JPEG, PNG, SVG or GIF</div>
							<div>(Maximum file size 50MB)</div>
						</div>
						<div className="text-t-blue underline ml-12">Add Images</div>
					</div>

					<div className="flex w-full justify-end mt-8">
						<BasicButton text="Add product"/>
					</div>
				</div>

			</form>
		</div>
	);
}

export default NewProduct;