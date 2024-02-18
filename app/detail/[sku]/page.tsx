import type { Metadata } from 'next'
import DetailPage from './DetailPage'

type Props = {
    params: { sku: string }
}

export function generateMetadata({ params }: Props): Metadata {
    const sku = params.sku
    return {
        title: sku,
    }
}

export default function Detail() {
    return (
        <div className="container mx-auto py-10">
            <DetailPage />
        </div>
    )
}
