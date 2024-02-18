import Image from 'next/image'
const download = require('downloadjs')
import { toPng } from 'html-to-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { slugVn } from '@/lib/utils'
import { useSearchParams } from 'next/navigation'

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
    const searchParam = useSearchParams()
    const type: string = searchParam.get('type') || 'g30'
    const handle: string = searchParam.get('handle') || 'cn'

    const indexFont: string = searchParam.get('font') || '0'
    const indexFontInt: number = parseInt(indexFont)
    const name: string = searchParam.get('name') || 'Tên Của Bạn'
    const size: string = searchParam.get('size') || '22'
    const spacing: string = searchParam.get('spacing') || '0'

    const name2: string = searchParam.get('name2') || '0888.888.888'
    const size2: string = searchParam.get('size2') || '22'
    const spacing2: string = searchParam.get('spacing2') || '0'

    const dis: string = searchParam.get('dis') || '0'
    const line: string = searchParam.get('line') || '1'

    function handleDownLoadImg(
        id: number,
        type: string,
        handle: string,
        line: string,
        text1: string,
        fz1: string,
        spacing1: string,
        text2: string,
        fz2: string,
        spacing2: string,
        dis: string,
    ) {
        const element: any = document.getElementById(
            `image-${type}-${handle}-${slugVn(text1)}-${fz1}-${spacing1}${
                line === '2'
                    ? `-${line}-${slugVn(text2)}-${fz2}-${spacing2}-${dis}`
                    : ''
            }-${id}`,
        )
        toPng(element)
            .then(function (dataUrl) {
                download(
                    dataUrl,
                    `${type}-${handle}-${slugVn(text1)}-${fz1}-${spacing1}${
                        line === '2'
                            ? `-${line}-${slugVn(
                                  text2,
                              )}-${fz2}-${spacing2}-${dis}`
                            : ''
                    }-${id}.png`,
                )
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error)
            })
    }

    return (
        <>
            <div className="relative w-full">
                <span
                    className="cursor-pointer md:text-md text-xs absolute max-sm:top-8 max-sm:left-2 top-16 left-4 z-10 flex max-sm:w-5 max-sm:h-5 w-10 h-10 rounded-full bg-main text-white justify-center items-center"
                    onClick={() =>
                        handleDownLoadImg(
                            id,
                            type,
                            handle,
                            line,
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
                </span>
                <div
                    className="relative"
                    id={`image-${type}-${handle}-${slugVn(
                        name,
                    )}-${size}-${spacing}${
                        line === '2'
                            ? `-${line}-${slugVn(
                                  name2,
                              )}-${size2}-${spacing2}-${dis}`
                            : ''
                    }-${id}`}
                >
                    <Image
                        src={src}
                        width={1500}
                        height={2000}
                        alt={''}
                        priority={true}
                        className="w-full"
                    />
                    {children}
                </div>
            </div>
        </>
    )
}
