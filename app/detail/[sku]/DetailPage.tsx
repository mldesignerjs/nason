'use client'
import { useEffect, useRef, useState } from 'react'
import { TextEngraved } from '@/components/shared/TextEngraved'
import { WrapperImgEngrave } from '@/components/shared/WrapperImgEngrave'
import { umbrellas } from '@/constants'
import { useParams } from 'next/navigation'
import { detailPage } from '@/types'

export default function DetailPage() {
    const params = useParams()
    const sku = params.sku
    const imageRef1 = useRef<HTMLDivElement>(null)
    const [umbrellaImgs, setUmbrellaImgs] = useState<detailPage>(null)
    const [scale, setScale] = useState<number>(100)
    useEffect(() => {
        umbrellas.find((umbrella) => {
            setUmbrellaImgs(umbrella.detailPage)
            return umbrella.sku === sku
        })

        const elementImg1: any = imageRef1?.current
        setScale(elementImg1.offsetWidth / 1344)
    }, [sku])

    return (
        <div className="mt-8" ref={imageRef1}>
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
