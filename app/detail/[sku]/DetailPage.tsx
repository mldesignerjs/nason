'use client'
import { useEffect, useRef, useState } from 'react'
import { TextEngraved } from '@/components/shared/TextEngraved'
import { WrapperImgEngrave } from '@/components/shared/WrapperImgEngrave'
import { umbrellas } from '@/constants'
import { useParams } from 'next/navigation'
import { detailPage } from '@/types'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function DetailPage() {
    const params = useParams()
    const sku = params.sku
    const imageRef1 = useRef<HTMLDivElement>(null)
    const [umbrellaImgs, setUmbrellaImgs] = useState<detailPage>(null)
    const [umbrellaLink, setUmbrellaLink] = useState<string>('')
    const [scale, setScale] = useState<number>(100)
    useEffect(() => {
        umbrellas.find((umbrella) => {
            setUmbrellaImgs(umbrella.detailPage)
            setUmbrellaLink(umbrella.link)
            return umbrella.sku === sku
        })

        const elementImg1: any = imageRef1?.current
        setScale(elementImg1.offsetWidth / 1344)
    }, [sku])

    return (
        <div className="mt-8" ref={imageRef1}>
            <Link
                href={umbrellaLink}
                className="cursor-pointer text-xs fixed max-sm:top-32 max-sm:right-10 top-32 right-32 z-10 flex px-4 py-2 rounded-full bg-main text-white justify-center items-center"
            >
                <FontAwesomeIcon icon={faCartShopping} />{' '}
                <span className="pl-2">Mua ngay</span>
            </Link>
            {!umbrellaImgs
                ? 'Đang cập nhật'
                : umbrellaImgs?.map((umbrellaImg, index) => (
                      <WrapperImgEngrave
                          key={index}
                          src={umbrellaImg.imgSrc}
                          id={index}
                      >
                          {umbrellaImg.texts?.map((engravedText, index) => (
                              <div
                                  key={index}
                                  className="engraved"
                                  style={{
                                      top: `${engravedText.x}%`,
                                      left: `${engravedText.y}%`,
                                      transform: `translate(-50%,-50%) 
                                        rotateX(${engravedText.rotateX}deg) 
                                        rotateY(${engravedText.rotateY}deg)
                                        rotateZ(${engravedText.rotateZ}deg) 
                                        scale(${scale * engravedText.scale})`,
                                  }}
                              >
                                  <TextEngraved handle={engravedText.handle} />
                              </div>
                          ))}
                      </WrapperImgEngrave>
                  ))}
        </div>
    )
}
