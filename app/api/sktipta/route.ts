// import { prisma } from "@/app/PrismaClient/prismaClient";
// export async function GET() {
//   type novObjekat = {
//     slika: string;
//     ime: String;
//     boja: String;
//   };
//   type zaDB = {
//     ime: String;
//     slika: String;
//     dimenzija: String;
//     boja: String;
//   };
//   let brands = [
//     "Abarth",
//     "AlfaRomeo",
//     "Audi",
//     "AutoEtiketa",
//     "Barbie",
//     "Barbie",
//     "Barbie",
//     "Batman",
//     "BMW",
//     "Bratz",
//     "Brembo",
//     "Burago",
//     "FakeTaxi",
//     "FormulaOne",
//     "France",
//     "Germany",
//     "Glovo",
//     "GreatBritain",
//     "GTI",
//     "GTI",
//     "HandWashOnly",
//     "HotWheels",
//     "HotWheels",
//     "HotWheels",
//     "Italy",
//     "JamesBond",
//     "Lego",
//     "Lego",
//     "MadeInJapan",
//     "MadeInJapan",
//     "MiniChamps",
//     "MiniCooper",
//     "MotoGP",
//     "MotoGP",
//     "NikadNecesBitiGas",
//     "Peugeot",
//     "PlayBoy",
//     "Rockstar",
//     "Serbia",
//     "Sweden",
//     "Wolt",
//   ];
//   let colors = [
//     "Black",
//     "Black",
//     "Black",
//     "White",
//     "Black",
//     "Pink",
//     "White",
//     "Yellow",
//     "Black",
//     "Pink",
//     "Red",
//     "Black",
//     "Yellow",
//     "Black",
//     "",
//     "",
//     "Yellow",
//     "",
//     "Black",
//     "White",
//     "Black",
//     "Black",
//     "Blue",
//     "White",
//     "",
//     "Black",
//     "Black",
//     "Red",
//     "White",
//     "Black",
//     "Black",
//     "White",
//     "Black",
//     "White",
//     "Black",
//     "Black",
//     "Black",
//     "Orange",
//     "",
//     "",
//     "Blue",
//   ];
//   function objectCreator(brands: String[], colors: String[]) {
//     const novArray: novObjekat[] = [];
//     for (let i in brands) {
//       const objekat: novObjekat = {
//         boja: colors[i],
//         ime: brands[i],
//         slika: `${brands[i]}${colors[i]}.png`,
//       };
//       novArray.push(objekat);
//     }
//     return novArray;
//   }
//   const novArray = objectCreator(brands, colors);

//   let data: any = [];
//   if (data.length === 0) {
//     data = novArray.map((n) => {
//       const dimenzije = ["15x20", "7.5x10"];
//       const nekiArray: zaDB[] = [];
//       dimenzije.forEach((dimenzija) => {
//         const fora: zaDB = {
//           ime: n.ime,
//           boja: n.boja,
//           slika: n.slika,
//           dimenzija: dimenzija,
//         };
//         nekiArray.push(fora);
//       });
//       return nekiArray;
//     });
//     const create = await prisma.tag.createMany({
//       data: data.flat(),
//     });
//   }

//   return Response.json({
//     novArray: data.flat(),
//   });
// }
