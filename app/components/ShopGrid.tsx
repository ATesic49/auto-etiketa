import React from 'react'
import ShopItem from './ShopItem'
import { prisma } from '@/app/PrismaClient/prismaClient'
import ShopClientGrid from './ShopClientGrid';
import { PrismaClient } from '@prisma/client';

type tag = {
    id: number;
    slika: string;
    ime: string;
    dimenzija: string;
    boja: string;
}
export const dynamic = 'force-dynamic'
async function ShopGrid() {

    const tag = await new PrismaClient().tag.findMany({})
    const GrupedBy = groupByImeAndBoja(tag)

    function groupByImeAndBoja(tags: tag[]): tag[][] {
        const groups: Record<string, tag[]> = tags.reduce((acc, tag) => {
            const key = `${tag.ime}-${tag.boja}`;
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(tag);
            return acc;
        }, {} as Record<string, tag[]>);

        // Convert the object of groups into an array of groups
        return Object.values(groups);
    }


    function groupByIme(tags: tag[]): Record<string, tag[]> {
        const groups: Record<string, tag[]> = tags.reduce((acc, tag) => {
            const key = tag.ime;
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(tag);
            return acc;
        }, {} as Record<string, tag[]>);

        // Convert the object of groups into an array of groups
        return groups;
    }

    const drugiProizvodi = groupByIme(tag)
    return (
        <div className=' flex flex-col gap-8 text-gary-800 justify-center w-full items-center py-8 md:py-16 '>
            <ShopClientGrid drugiProizvodi={drugiProizvodi} GrupedBy={GrupedBy} />
        </div>
    )
}

export default ShopGrid