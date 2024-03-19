'use client'
import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

import { engraveFonts, umbrellas } from '@/constants'
import { handleO } from '@/types'
export interface ITextEngravedProps {
    handle: handleO['value']
}

export function TextEngraved(props: ITextEngravedProps) {
    const path = usePathname()
    const kindUmbrella = path.split('/')[2]

    const searchParam = useSearchParams()

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

    const [sizeHandle, setSizeHandle] = useState<number>(0)

    useEffect(() => {
        umbrellas.find((umbrella) => {
            setSizeHandle(umbrella?.sizeHandle)
            return umbrella.sku === kindUmbrella
        })
    }, [kindUmbrella])

    return (
        <>
            <span
                className={`engrave ${props.handle}`}
                style={{
                    width: `${sizeHandle}cm`,
                    fontFamily: engraveFonts[indexFontInt].style.fontFamily,
                    fontSize: `${size}pt`,
                    letterSpacing: `${spacing}px`,
                }}
            >
                {name}
            </span>
            {line === '2' && (
                <span
                    className={`engrave ${props.handle}`}
                    style={{
                        width: `${sizeHandle}cm`,
                        fontFamily: engraveFonts[indexFontInt].style.fontFamily,
                        fontSize: `${size2}pt`,
                        letterSpacing: `${spacing2}px`,
                        marginTop: `${dis}px`,
                    }}
                >
                    {name2}
                </span>
            )}
        </>
    )
}
