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
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "atesic7@gmail.com",
      pass: "guvx xxzz mods pygj",
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <autoEtiketa@gmail.com>', // sender address
    to: data.data.email, // list of receivers
    subject: "Payment Accepted ✔", // Subject line
    text: "Postovani, obavestavamo vas da je vasa uplata prosla, i da mozete da ocekujete...", // plain text body
    html: "<p> Postovani, obavestavamo vas da je vasa uplata prosla i da mozete da ocekujete...</p>", // html body
  });
  const info2 = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <autoEtiketa@gmail.com>', // sender address
    to: "atesic7@gmail.com", // list of receivers
    subject: `Porudzbina od ${data.data.name}`, // Subject line
    text: `Ime:${data.data.name}
     Zemlja i Grad:${data.data.country} 
    Adresa:${data.data.adress} Tel:${data.data.tel}
    Zip kod:${data.data.zipCode}  `, // plain text body
    // html body
    html: `<h2> ${data.data.name}  ${data.data.country} </h2> 
     <p> Ulice ${data.data.adress} <b> ${data.data.zipCode}<b/> </p>  <b> Tel:${
      data.data.tel
    }</b>
    ${data.constKorpa.map((tag: korpaState) => {
      return `<hr>  Ime:${tag.tag.ime} <br> Boja:${tag.tag.boja}  <br> Dimenzija:${tag.tag.dimenzija} <br> Kvantet:${tag.quantity} <br>`;
    })}
    
    `,
  });
  console.log("Message sent: %s", info.messageId, info2.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}
