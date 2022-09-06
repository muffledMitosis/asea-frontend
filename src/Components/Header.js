import {VscTriangleDown} from 'react-icons/vsc';

function Header(){
	return (
		<div className="flex flex-row justify-end items-center p-4">
			<div className="flex justify-center align-baseline">
				<div className="font-bold">
					ADMIN
				</div>
				<div className="ml-2 font-bold pt-1">
					<VscTriangleDown />
				</div>
			</div>
			<div className='w-10 h-10 rounded-full bg-t-blue ml-4'>
				<div className='relative w-3 h-3 rounded-full bg-green-400 top-7 left-7'>
				</div>
			</div>
		</div>
	);
}

export default Header;