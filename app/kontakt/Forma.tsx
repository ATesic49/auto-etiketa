import React from "react";
import nodemailer from "nodemailer";
import ButtonSubmit from "./ButtonSubmit";
import { revalidatePath } from "next/cache";
const Forma = () => {
	async function handleSubmit(formData: FormData) {
		"use server";

		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const phone = formData.get("phone") as string;
		const message = formData.get("message") as string;

		//krece haos

		const transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			service: "gmail",
			port: 587,
			secure: false, // Use `true` for port 465, `false` for all other ports
			auth: {
				user: "autoetiketa@gmail.com",
				pass: "jaib gnxt occa uhnw",
			},
		});
		const info = await transporter.sendMail({
			from: email, // sender address
			to: "autoetiketa@gmail.com", // list of receivers
			subject: `Poruka od ${name} `, // Subject line
			text: `${message} Broj Telefona:${phone}`, // plain text body
			html: `<p><strong>Message: </strong>${message}</p <p><strong>Phone Number: </strong> ${phone}</p> <p><strong>Email: </strong> ${email}</p>`,
		});
		console.log("Message sent: %s", info.messageId);
		revalidatePath("/kontakt");
	}
	const list = [
		{
			ime: "name",
			type: "text",
			placeholder: "Name:",
			span: "md:col-span-1",
		},
		{
			ime: "email",
			type: "email",
			placeholder: "Email:",
			span: "md:col-span-1",
		},
		{
			ime: "phone",
			type: "tel",
			placeholder: "Broj Telefona:",
			span: "md:col-span-2",
		},
	];
	return (
		<form
			action={handleSubmit}
			className="grid md:grid-cols-2 w-full md:gap-8 gap-4 mx-auto max-w-screen-md "
		>
			{list.map((item) => (
				<div
					key={item.ime}
					className={`w-full col-span-2 relative ${item.span} border-neutral-50 `}
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
			<div className="w-full relative col-span-2 border-neutral-50 ">
				<textarea
					className="col-span-2 w-full  peer focus:outline-none text-neutral-50 border-2 py-2 px-4 bg-transparent  z-[2] border-neutral-50 min-h-32"
					name="message"
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
			<ButtonSubmit />
		</form>
	);
};

export default Forma;
