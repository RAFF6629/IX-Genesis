import Rating from "../components/Rating";

const Footer = () => {
	return (
		<footer className="" id="Footer">
			<div className="mx-auto w-full max-w-screen-xl px-8 py-6 lg:py-8">
				<div className="md:flex md:justify-between">
					<div className="mb-6 md:mb-0">
						<a href="#" className="flex items-center">
							<img
								src="/IX.jpg"
								alt="Logo IX Genesis"
								className="h-[4.5rem] w-[4.5rem] right-2 relative rounded-full brightness-200"
							/>
							<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
						</a>
					</div>
					<div className="hidden md:block">
						<Rating />
					</div>
				</div>

				<div className="flex items-center justify-center mt-8 md:hidden">
					{/* RATING */}
					<Rating />
				</div>

				<hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

				<div className="sm:flex sm:items-center sm:justify-between">
					<div className="flex mt-4 justify-center sm:mt-0">
						<p className="text-[0.7rem] text-white opacity-70">
							© {new Date().getFullYear()} Kelas IX Genesis | Di Kelola Oleh Siswa IX Genesis
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
