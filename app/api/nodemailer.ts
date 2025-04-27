import nodemailer from "nodemailer";
import { korpaState } from "../redux/slices/korpaSlice";
// async..await is not allowed in global scope, must use a wrapper
interface ok {
	data: {
		name: string;
		zipCode: string;
		country: string;
		email: string;
		tel: string;
		adress: string;
	};
	constKorpa: korpaState[];
}
export async function nodemailToME(data: ok) {
	console.log("sending");
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
	//TODO: CREATE GMAIL TRANSPORTER
	// let cena = 0;
	// data.constKorpa.forEach((element) => {
	// 	cena +=
	// 		element.quantity * (element.tag.dimenzija === "15x20cm" ? 1000 : 500);
	// });

	function zaSabiranjeCena(tags: korpaState[]) {
		const rezultat: number[] = [];
		tags.forEach((tag) => {
			for (let i = 0; i < tag.quantity; i++) {
				const vrednost = tag.tag.dimenzija === "15x20cm" ? 1000 : 500;
				rezultat.push(vrednost);
			}
		});
		return rezultat;
	}
	const predCena = zaSabiranjeCena(data.constKorpa);
	function sabiranjeCena(cene: number[]) {
		let init = {
			velike: 0,
			male: 0,
		};
		let ukupno = 0;
		cene.forEach((cena) => {
			if (cena === 1000) {
				init = { ...init, velike: init.velike + 1 };
			} else {
				init = { ...init, male: init.male + 1 };
			}
		});
		if (init.velike > init.male) {
			ukupno = ukupno + init.male * 1300;
			ukupno += (init.velike - init.male) * 1000;
		} else {
			ukupno = ukupno + init.velike * 1300;
			ukupno += (init.male - init.velike) * 500;
		}
		return ukupno;
	}
	let cena = sabiranjeCena(predCena);

	if (cena <= 2000) cena += 550;
	// send mail with defined transport object
	const info = await transporter.sendMail({
		from: "<autoEtiketa@gmail.com>", // sender address
		to: data.data.email, // list of receivers
		subject: "Payment Accepted ✔", // Subject line
		text: "Postovani, obavestavamo vas da je vasa uplata prosla, i da mozete da ocekujete...", // plain text body
		html: "<p> Poštovani, obaveštavamo Vas da je uplata prošla i da ćemo Vam javiti kada pošaljemo etikete na Vašu adresu🏁</p>", // html body
	});
	const info2 = await transporter.sendMail({
		from: '"AutoEtiketa 	" <autoEtiketa@gmail.com>', // sender address
		to: ["autoetiketa@gmail.com"], // list of receivers TODO: I OVDE GA UNESI
		subject: `Porudzbina od ${data.data.name}`, // Subject line
		text: `Ime:${data.data.name}
     Zemlja i Grad:${data.data.country} 
    Adresa:${data.data.adress} Tel:${data.data.tel}
	Email: ${data.data.email}
    Zip kod:${data.data.zipCode}  `, // plain text body
		// html body
		html: `<ul>
		<li> <h2> ${data.data.name}</h2>  </li>
		<li><br>Email: ${data.data.email}</li> <li> <h2>  ${
			data.data.country
		} </h2></li> 
     <li><p> Ulice ${data.data.adress} <b> ${
				data.data.zipCode
			}<b/> </p>  </li> <li><b> Tel:${data.data.tel}</b> </li>
  
	<li>	${data.constKorpa.map((tag: korpaState) => {
		return `<hr>  Ime:${tag.tag.ime} <br> Boja:${tag.tag.boja}  <br> Dimenzija:${tag.tag.dimenzija} <br> Kvantet:${tag.quantity} <br> Vrsta: ${tag.vrsta === 1 ? "Lepljiva traka" : "Čičak"}`;
	})}</li>
	<hr>
	<h2>Cena: ${cena}rsd</h2>
    </ul>
    `,
	});
	// const info3 = await transporter.sendMail({
	// 	from: '"AutoEtiketa 	" <autoEtiketa@gmail.com>', // sender address
	// 	to: ["atesic7@gmail.com"], // list of receivers TODO: I OVDE GA UNESI
	// 	subject: `Porudzbina od ${data.data.name}`, // Subject line
	// 	text: `Ime:${data.data.name}
	//  Zemlja i Grad:${data.data.country}
	// Adresa:${data.data.adress} Tel:${data.data.tel}
	// Email: ${data.data.email}
	// Zip kod:${data.data.zipCode}  `, // plain text body
	// 	// html body
	// 	html: `<ul>
	// 	<li> <h2> ${data.data.name}</h2>  </li>
	// 	<li><br>Email: ${data.data.email}</li> <li> <h2>  ${
	// 		data.data.country
	// 	} </h2></li>
	//  <li><p> Ulice ${data.data.adress} <b> ${
	// 			data.data.zipCode
	// 		}<b/> </p>  </li> <li><b> Tel:${data.data.tel}</b> </li>

	// <li>	${data.constKorpa.map((tag: korpaState) => {
	// 	return `<hr>  Ime:${tag.tag.ime} <br> Boja:${tag.tag.boja}  <br> Dimenzija:${tag.tag.dimenzija} <br> Kvantet:${tag.quantity} <br> Vrsta: ${tag.vrsta === 1 ? "Lepljiva traka" : "Čičak"}`;
	// })}</li>
	// <hr>
	// <h2>Cena: ${cena}rsd</h2>
	// </ul>
	// `,
	// });
	console.log("Message sent: %s", info.messageId, info2.messageId);
	// Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}
