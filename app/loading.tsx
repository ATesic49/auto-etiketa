export default function Loading() {
	// Or a custom loading skeleton component
	return (
		<div className="fixed h-full w-full flex justify-center items-center ">
			<p className="text-sm lg:text-base text-gray-500 font-medium">
				loading...
			</p>
		</div>
	);
}
