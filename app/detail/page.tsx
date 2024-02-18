'use client'
import { umbrellas } from '@/constants'
import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'

function SearchParam() {
    const searchParam = useSearchParams()
    const kindUmbrella: string = searchParam.get('type') || 'g30'
    const [umbrellaPage, setUmbrellaPage] = useState<string>('')

    useEffect(() => {
        umbrellas.find((umbrella) => {
            setUmbrellaPage(umbrella.sku)
            return umbrella.sku === kindUmbrella
        })
    }, [kindUmbrella])
    return <div className="mt-8">{umbrellaPage}</div>
}
export default function DetailEngrave() {
    return (
        <div className="container mx-auto py-10">
            <Suspense>
                <SearchParam />
            </Suspense>
        </div>
    )
}
