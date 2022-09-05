import SearchIcon from '../../assets/icons/edit-icon.svg';

function SearchBar(){
	return (
		<div>
			<form>
				<div className="bg-t-light-gray flex flex-row rounded-full p-2">
					<input type="text" placeholder="Search for products" className="ml-2 bg-t-light-gray text-t-dark-gray w-64" />
					<button className="bg-t-blue rounded-full ml-10 px-8 text-t-white font-bold py-2">
						Search
					</button>
				</div>
			</form>
		</div>
	);
}

export default SearchBar;