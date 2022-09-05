import SearchBar from "./Minor/SearchBar";
import StarIcon from '../assets/icons/star.svg'
import StarredIcon from '../assets/icons/starred.svg'

function SubHeader(props){
	return (
		<div className="my-10 mx-4">

			<div className="font-satoshi font-bold text-3xl tracking-sub-header">{props.heading}</div>
			<div className="flex flex-row justify-between mt-4">
				<SearchBar />
				<div className="flex">
					<button className="bg-t-blue text-t-white font-bold mx-2 px-10 py-2 rounded-md">
						New Product
					</button>
					<button className="border border-t-blue rounded-md px-4">
					<img src={StarredIcon} />
					</button>
				</div>
			</div>

		</div>
	);
}

export default SubHeader;