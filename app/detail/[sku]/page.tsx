import type { Metadata } from 'next'
import DetailPage from './DetailPage'

type Props = {
}

export function generateMetadata({ params }: Props): Metadata {
    return {
        title: "Khắc tên lên tay cầm",
    }
}

export default function Detail() {
    return (
        <div className="container mx-auto py-10">
            <DetailPage />
        </div>
    )
}
