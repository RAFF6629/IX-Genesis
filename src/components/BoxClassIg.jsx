const BoxClassIg = () => {
	return (
		<div id="BoxClassIg" className="relative w-full max-w-md bg-gray-800 p-4 rounded-lg"> {/* Adjust the width and add padding */}
			<a href="https://www.instagram.com/9g.genesiss/" className="flex flex-col">
				<div className="flex justify-between">
					<img src="/Instagram.svg" alt="Instagram Logo" className="w-auto h-10" />
					<img src="/next.png" alt="Next Icon" className="h-4 w-4" />
				</div>
				<h1 className="text-white text-lg font-semibold pr-3 mt-3">
					Class Instagram
				</h1>
				<div className="text-white flex py-2 opacity-60 text-xs">View More</div>
			</a>
		</div>
	)
}

export default BoxClassIg;
