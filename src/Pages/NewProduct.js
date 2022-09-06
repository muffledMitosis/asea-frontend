import Header from "../Components/Header";
import ArrowIcon from "../assets/icons/arrow.svg";
import BasicSubmit from "../Components/Minor/BasicSubmit";
import BasicSpinner from "../Components/Minor/BasicSpinner";

import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import ProductDataHeader from "../Components/Minor/ProductData/ProductDataHeader";
import { useSearchParams } from "react-router-dom";


function NewProduct(props){

	const [editTransfer, setEditTransfer] = useState(false);

	const [searchParams, setSearchParams] = useSearchParams();
	const action = searchParams.get('action');
	const editID = searchParams.get('editID');

	const [productData, setProductData] = useState(null);

	console.log(editID);

	if(editID && action=="edit" && productData == null){
		setEditTransfer(true);
		axios.get('http://localhost:8080/get-from-sku/' + editID)
				 .then(resp => {
					console.log(resp.data)
				 });
		setProductData("got");
	}

	const sendPOST = data =>{
		axios.post('http://localhost:8080/add-product', data)
				 .then(resp => window.location="/");
	};

	const [posting, setPosting] = useState(false);

	const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {setPosting(true); sendPOST(data);};
  const onError = (errors, e) => console.log(errors, e);

	let formElem = (
			<form className=" text-t-black flex w-full justify-center"
						onSubmit={handleSubmit(onSubmit, onError)}>
				<div className="max-w-3xl font-satoshi">

					<ProductDataHeader text={action == "add" ? "Add new product" : "Edit product"} />

					<div className="flex font-satoshi items-center">
						<div className="w-16">SKU</div>
						<input className="w-64 h-8 bg-t-light-gray" type="text" 
									 {...register("SKU")}/>
					</div>
					<div className="flex font-satoshi items-center mt-8 justify-between">
						<div className="flex items-center">
							<div className="w-16">Name</div>
							<input className="w-64 h-8 bg-t-light-gray" type="text" 
										 {...register("Name")}/>
						</div>
						<div className="flex items-center">
							<div className="w-16 ml-24">QTY</div>
							<input className="w-64 h-8 bg-t-light-gray" type="text" 
										 {...register("QTY")}/>
						</div>
					</div>

					<div className="mt-8">Product Description</div>
					<div className="text-xs text-t-dark-gray mt-2">A small description about the product</div>
					<textarea className="w-full h-32 mt-2 bg-t-light-gray" type="text"
										 {...register("DES")}/>

					<div className="flex mt-8">
						<div className="flex flex-col text-xs text-t-dark-gray">
							<div className="text-t-black text-base">Product Images</div>
							<div className="mt-2">JPEG, PNG, SVG or GIF</div>
							<div>(Maximum file size 50MB)</div>
						</div>
						<div className="text-t-blue underline ml-12">Add Images</div>
					</div>

					<div className="flex w-full justify-end mt-8">
						{posting ? <BasicSpinner /> : <BasicSubmit value="Add product" />}
					</div>
				</div>

			</form>

	);

	return (
		<div className="">
			<Header />
			{editTransfer ? <BasicSpinner /> : formElem}
		</div>
	);
}

export default NewProduct;