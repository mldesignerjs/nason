import type { Metadata } from 'next'
import DetailPage from './DetailPage'

type Props = {
    params: { sku: string }
}

export function generateMetadata({ params }: Props): Metadata {
    const sku = params.sku
    // const [umbrellName, setUmbrellaName] = useState<string>('')
    // useEffect(() => {
    //     umbrellas.find((umbrella) => {
    //         setUmbrellaName(umbrella.name)
    //         return umbrella.sku === sku
    //     })
    // }, [])
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
