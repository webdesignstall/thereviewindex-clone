import * as React from "react"
import Image from "next/image"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function ReportCard() {
    return (
        <ScrollArea className="rounded-md border w-[90vw]">
            <div className="flex space-x-4 p-8">
                {items.map((artwork, index) => (
                    <figure key={index} className="border w-64 h-auto">
                        <div className="overflow-hidden flex justify-center items-center rounded-md p-6 bg-slate-200 dark:bg-neutral-800">
                            <Image
                                src={artwork.image}
                                alt={`Photo by ${artwork.title}`}
                                className=" h-fit w-fit object-cover"
                                width={300}
                                height={300}
                            />
                        </div>
                        <figcaption className="p-2 text-xs text-muted-foreground border h-44 flex flex-col justify-between">
                            <div>
                                <h2 className="text-lg font-medium pb-3">{artwork.title}</h2>
                                <div className="flex">
                                    {
                                        artwork?.subTitle?.map((subtitle) => (
                                            <Badge variant='secondary'>{subtitle}</Badge>
                                        ))
                                    }
                                </div>

                            </div>
                            <div className="">
                                <Link href='/' className="text-blue-600 font-medium p-3 flex">See Demo Report</Link>
                            </div>
                        </figcaption>
                    </figure>
                ))}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    )
}



const items = [
    {
        title: 'Top Brands Report (Demo)',
        subTitle: ['Smartphones', 'India'],
        image: '/rank_list.svg'
    },
    {
        title: 'Brand Deepdive Report (Demo)',
        subTitle: ['Dell Monitors', 'Amazon US'],
        image: '/brand.svg'
    },
    {
        title: 'Multi Retailer Report (Demo)',
        subTitle: ['Amazon US', 'BestBuy', 'NewEgg'],
        image: '/cross_marketplace.svg'
    },
    {
        title: 'Variant Report (Demo)',
        subTitle: ['Dell U-Series', '27 inch', '32 inch'],
        image: '/variant.svg'
    },
    {
        title: 'product SKU Report (Demo)',
        subTitle: ['Samsung CRG5 Monitor'],
        image: '/variant.svg'
    }
]