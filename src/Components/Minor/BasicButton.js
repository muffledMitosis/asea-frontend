function BasicButton(props){
	return (
		<button className="bg-t-blue text-t-white font-bold mx-2 px-10 py-2 rounded-md">
			{props.text}
		</button>
	);
}

export default BasicButton;