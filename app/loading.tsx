export default function Loading() {
	// Or a custom loading skeleton component
	return (
		<div className="fixed h-full w-full flex justify-center items-center ">
			<p className="text-base lg:text-lg text-gray-700 font-medium">
				loading...
			</p>
		</div>
	);
}
