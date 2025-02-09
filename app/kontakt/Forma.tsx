import React from "react";

const Forma = () => {
	const list = [
		{
			ime: "name",
			type: "text",
			placeholder: "Name:",
			span: 1,
		},
		{
			ime: "email",
			type: "email",
			placeholder: "Email:",
			span: "col-span-1",
		},
		{
			ime: "Broj Telefona",
			type: "tel",
			placeholder: "Broj Telefona:",
			span: "col-span-2",
		},
	];
	return (
		<div className="grid grid-cols-2 w-full md:gap-8 gap-4 mx-auto max-w-screen-md ">
			{list.map((item) => (
				<div
					key={item.ime}
					className={`w-full relative ${item.span} border-neutral-50 `}
					tabIndex={0}
				>
					<input
						type={item.type}
						className="w-full peer focus:outline-none text-neutral-50 border-2 py-2 px-4 bg-transparent relative z-[2]"
						placeholder=""
						name={item.ime}
						id={item.ime}
					></input>
					<label
						htmlFor={item.ime}
						className=" cursor-pointer absolute
             peer-focus:left-0 peer-focus:translate-x-0 peer-focus:top-0 peer-focus:scale-75
                left-0 translate-x-0 -translate-y-full  bg-neutral-950 top-2 scale-75 px-2 duration-200 transition-all peer-placeholder-shown:top-1/2  peer-placeholder-shown:-translate-y-1/2 z-[2] text-gray-400 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100"
					>
						{item.placeholder}
					</label>
				</div>
			))}
			<div
				className="w-full relative col-span-2 border-neutral-50 "
				tabIndex={0}
			>
				<textarea
					className="col-span-2 w-full  peer focus:outline-none text-neutral-50 border-2 py-2 px-4 bg-transparent  z-[2] border-neutral-50 min-h-32"
					name="poruka"
					placeholder=""
					id="textarea"
				></textarea>

				<label
					htmlFor="textarea"
					className="absolute cursor-pointer  
             peer-focus:left-0 peer-focus:translate-x-0 peer-focus:top-0 peer-focus:scale-75
                left-0 translate-x-0 -translate-y-full  bg-neutral-950 top-0 scale-75 px-2 duration-200 transition-all peer-placeholder-shown:top-2 z-[2] peer-placeholder-shown:translate-y-0 text-gray-400 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100"
				>
					Poruka:
				</label>
			</div>
			<button className=" col-span-2 ml-auto px-8 py-2 bg-orange-600 text-orange-50 w-fit">
				Prosledi
			</button>
		</div>
	);
};

export default Forma;
