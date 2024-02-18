const download = require('downloadjs')
import { toPng } from 'html-to-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { usePathname, useSearchParams } from 'next/navigation'

import { slugVn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export interface IWrapperImgEngraveProps {
    children: React.ReactNode
    src: string
    id: number
}

export function WrapperImgEngrave({
    src,
    children,
    id,
}: IWrapperImgEngraveProps) {
    const path = usePathname()
    const searchParam = useSearchParams()
    const type: string = path.split('/')[2]

    const indexFont: string = searchParam.get('font') || '0'
    const name: string = searchParam.get('name') || 'Tên Của Bạn'
    const size: string = searchParam.get('size') || '22'
    const spacing: string = searchParam.get('spacing') || '0'

    const name2: string = searchParam.get('name2') || '0888.888.888'
    const size2: string = searchParam.get('size2') || '22'
    const spacing2: string = searchParam.get('spacing2') || '0'

    const dis: string = searchParam.get('dis') || '0'
    const line: string = searchParam.get('line') || '1'

    function handleDownLoadImg(
        index: number,
        tp: string,
        l: string,
        f: string,
        t1: string,
        s1: string,
        sp1: string,
        t2: string,
        s2: string,
        sp2: string,
        d: string,
    ) {
        const element: any = document.getElementById(
            `image-${tp}-${f}-${slugVn(t1)}-${s1}-${sp1}${
                l === '2' ? `-${l}-${slugVn(t2)}-${s2}-${sp2}-${d}` : ''
            }-${index}`,
        )
        toPng(element)
            .then(function (dataUrl) {
                download(
                    dataUrl,
                    `${tp}-${slugVn(t1)}-${s1}-${sp1}${
                        l === '2' ? `-${l}-${slugVn(t2)}-${s2}-${sp2}-${d}` : ''
                    }-${index}.png`,
                )
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error)
            })
    }

    return (
        <>
            <div className="relative w-full">
                <Button
                    type="button"
                    className="cursor-pointer absolute top-10 left-10 z-10  bg-main text-white"
                    onClick={() =>
                        handleDownLoadImg(
                            id,
                            type,
                            line,
                            indexFont,
                            name,
                            size,
                            spacing,
                            name2,
                            size2,
                            spacing2,
                            dis,
                        )
                    }
                >
                    <FontAwesomeIcon icon={faDownload} />
                </Button>
                <div
                    className="relative"
                    id={`image-${type}-${indexFont}-${slugVn(
                        name,
                    )}-${size}-${spacing}${
                        line === '2'
                            ? `-${line}-${slugVn(
                                  name2,
                              )}-${size2}-${spacing2}-${dis}`
                            : ''
                    }-${id}`}
                >
                    <img src={src} alt={''} className="w-full static" />
                    {children}
                </div>
            </div>
        </>
    )
}
