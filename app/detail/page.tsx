'use client'
import { umbrellas } from '@/constants'
import { useSearchParams } from 'next/navigation'
import type { Metadata } from 'next'
import { useEffect, useState } from 'react'

export const metadata: Metadata = {
    title: 'Page',
}

export default function DetailEngrave() {
    const searchParam = useSearchParams()
    const kindUmbrella: string = searchParam.get('type') || 'g30'
    const [umbrellaPage, setUmbrellaPage] = useState<string>('')

    useEffect(() => {
        umbrellas.find((umbrella) => {
            setUmbrellaPage(umbrella.sku)
            return umbrella.sku === kindUmbrella
        })
    }, [])

    return (
        <div className="container mx-auto py-10">
            <div className="mt-8">{umbrellaPage}</div>
        </div>
    )
}
