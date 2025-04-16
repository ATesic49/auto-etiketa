import { prisma } from "./app/PrismaClient/prismaClient";

function transformImagePath(path: string): string {
	// Uklanja .jpg ili .png na kraju stringa
	const withoutExtension = path.replace(/\.(jpg|png)$/i, "");
	return `${withoutExtension}/1.jpg`;
}

async function doTheWork() {
	const list = await prisma.tag.findMany({
		select: {
			slika: true,
			id: true,
		},
	});
	list.forEach(async (item) => {
		await prisma.tag.update({
			where: {
				id: item.id,
			},
			data: {
				slika: transformImagePath(item.slika),
			},
		});
	});
	console.log("gotovo");
}
console.log("radi");
doTheWork();
