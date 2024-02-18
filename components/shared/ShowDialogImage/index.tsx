'use client'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'

const download = require('downloadjs')
import { toPng } from 'html-to-image'

import { umbrellas } from '@/constants'
import { WrapperImgEngrave } from '../WrapperImgEngrave'
import { detailPage } from '@/types'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'

interface ShowDialogImageProps {
    children: React.ReactNode
    indexFont: number
    typeUmbrella: string
}

export function ShowDialogImage({
    children,
    indexFont,
    typeUmbrella,
}: ShowDialogImageProps) {
    const [umbrellaImgs, setUmbrellaImgs] = useState<detailPage>(null)

    function handleDownLoadImg(id: number) {
        const element: any = document.getElementById(`image-${id}`)
        toPng(element)
            .then(function (dataUrl) {
                download(dataUrl, 'my-nason-umbrella.png')
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error)
            })
    }

    useEffect(() => {
        umbrellas.find((umbrella) => {
            setUmbrellaImgs(umbrella.detailPage)
            console.log(typeUmbrella)
            return umbrella.sku === typeUmbrella
        })
    }, [typeUmbrella])

    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="h-[90vh]">
                <div className="flex justify-center h-full">
                    {!umbrellaImgs ? (
                        'Đang cập nhật'
                    ) : (
                        <Carousel className="h-[90vh] ">
                            <CarouselContent className="h-full">
                                {umbrellaImgs?.map((umbrellaImg, index) => (
                                    <CarouselItem
                                        key={index}
                                        className="flex flex-col justify-center items-center h-full"
                                    >
                                        <WrapperImgEngrave
                                            id={`image-${index}`}
                                            src={umbrellaImg.imgSrc}
                                            texts={umbrellaImg.texts}
                                            indexFont={indexFont}
                                        />
                                        <DialogFooter className="mt-4 justify-center sm:justify-center">
                                            <Button
                                                className="bg-main hover:text-main hover:bg-white hover:outline"
                                                onClick={() =>
                                                    handleDownLoadImg(index)
                                                }
                                            >
                                                Tải ảnh về
                                            </Button>
                                        </DialogFooter>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="left-0" />
                            <CarouselNext className="right-0" />
                        </Carousel>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    )
}
