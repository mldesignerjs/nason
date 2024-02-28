'use client'

import { Suspense, useEffect, useState } from 'react'
import Link from 'next/link'

import { useQueryState } from 'nuqs'
import { useSearchParams } from 'next/navigation'
const download = require('downloadjs')
import { toPng } from 'html-to-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleCheck,
    faDownload,
    faLink,
} from '@fortawesome/free-solid-svg-icons'

import { engraveFonts, kindHandle, umbrellas } from '@/constants'
import { EditContent } from '../components/shared/EditContent'
import { handleO, umbrellaO } from '@/types'
import Modal from '@/components/shared/Modal'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { slugVn } from '@/lib/utils'

function HomeSearchParam() {
    const searchParam = useSearchParams()
    const typeP: string = searchParam.get('type') || '0'
    const handlePP: string = searchParam.get('handle') || '0'
    const lineP: string = searchParam.get('line') || '1'

    const nameP: string = searchParam.get('name') || 'Tên Của Bạn'
    const sizeP: string = searchParam.get('size') || '22'
    const spacingP: string = searchParam.get('spacing') || '0'

    const nameP2: string = searchParam.get('name2') || '0888.888.888'
    const sizeP2: string = searchParam.get('size2') || '22'
    const spacingP2: string = searchParam.get('spacing2') || '0'

    const distanceP: string = searchParam.get('dis') || '0'

    const [type, setType] = useQueryState('type')
    const [handleP, setHandleP] = useQueryState('handle')
    const [line, setLine] = useQueryState('line')

    const [name, setName] = useQueryState('name')
    const [size, setSize] = useQueryState('size')
    const [spacing, setSpacing] = useQueryState('spacing')

    const [name2, setName2] = useQueryState('name2')
    const [size2, setSize2] = useQueryState('size2')
    const [spacing2, setSpacing2] = useQueryState('spacing2')

    const [distance, setDistance] = useQueryState('dis')

    useEffect(() => {
        setType(typeP)
        setHandleP(handlePP)
        setLine(lineP)
        setName(nameP)
        setSize(sizeP)
        setSpacing(spacingP)
        setName2(nameP2)
        setSize2(sizeP2)
        setSpacing2(spacingP2)
        setDistance(distanceP)
    }, [
        distanceP,
        handlePP,
        lineP,
        nameP,
        nameP2,
        setDistance,
        setHandleP,
        setLine,
        setName,
        setName2,
        setSize,
        setSize2,
        setSpacing,
        setSpacing2,
        setType,
        sizeP,
        sizeP2,
        spacingP,
        spacingP2,
        typeP,
    ])

    const [currentUmbrella, setCurrentUmbrella] = useState<umbrellaO>(
        umbrellas[parseInt(typeP)],
    )

    const [handle, setHandle] = useState<handleO>(
        umbrellas[parseInt(typeP)].handle[parseInt(handlePP)],
    )

    function handleChangeLineNumber(value: string) {
        setLine(value)
    }

    function handleChangeLineHeight(value: number[]) {
        setDistance(value[0].toString())
    }

    function handleChangeContent1(value: string) {
        setName(value)
    }

    function handleChangeFontSize1(value: number[]) {
        setSize(value[0].toString())
    }

    function handleChangeLetterSpacing1(value: number[]) {
        setSpacing(value[0].toString())
    }

    function handleChangeContent2(value: string) {
        setName2(value)
    }

    function handleChangeFontSize2(value: number[]) {
        setSize2(value[0].toString())
    }

    function handleChangeLetterSpacing2(value: number[]) {
        setSpacing2(value[0].toString())
    }

    function handleChangeUmbrella(value: string) {
        const nextUmbrella: any = umbrellas.find(
            (umbrella) => umbrella.id === value,
        )
        setCurrentUmbrella(nextUmbrella)
        setHandle(nextUmbrella.handle[0])
        setHandleP(nextUmbrella.handle[0].id)

        setType(nextUmbrella.id)
    }

    function handleChangeKindWood(value: string) {
        const nextHandle: any = currentUmbrella?.handle.find(
            (umbrella) => umbrella.value === value,
        )
        setHandle(nextHandle)
        setHandleP(nextHandle.id)
    }

    function handleDownLoadImg(
        id: number,
        tp: string,
        hd: string,
        l: string,
        t1: string,
        fz1: string,
        sp1: string,
        t2: string,
        fz2: string,
        sp2: string,
        dis: string,
    ) {
        const fileName = `${tp}-${hd}-${slugVn(t1)}-${fz1}-${sp1}${
            l === '2' ? `-${l}-${slugVn(t2)}-${fz2}-${sp2}-${dis}` : ''
        }-${id}`
        const element: any = document.getElementById(
            `imgWithEngraved-${fileName}`,
        )
        toPng(element)
            .then(function (dataUrl) {
                download(dataUrl, `${fileName}.png`)
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error)
            })
    }

    return (
        <div className="lg:px-24 max-lg:px-4 lg:pt-20 max-lg:pt-20 container mx-auto">
            <h2 className="text-center text-xl font-sans">
                Hãy chọn font, kích cỡ chữ để khắc tên lên tay cầm ô dù
            </h2>
            <Modal>
                <div className="">
                    <p className="font-bold text-center ">Số dòng chữ:</p>
                    <div className="flex items-center justify-center my-4">
                        <label
                            className="cursor-pointer mr-6"
                            htmlFor="lineNumber1"
                        >
                            <input
                                type="radio"
                                className="peer sr-only"
                                name="lineNumber"
                                id="lineNumber1"
                                value="1"
                                checked={line === '1'}
                                onChange={(e) =>
                                    handleChangeLineNumber(e.target.value)
                                }
                            />
                            <div className="w-24 max-w-xl rounded-md bg-white p-2 text-gray-300 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-main peer-checked:ring-main peer-checked:ring-offset-0">
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-semibold uppercase text-gray-500">
                                            1 dòng
                                        </p>
                                        <FontAwesomeIcon
                                            icon={faCircleCheck}
                                            className="text-xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        </label>
                        <label className="cursor-pointer" htmlFor="lineNumber2">
                            <input
                                type="radio"
                                className="peer sr-only"
                                name="lineNumber"
                                id="lineNumber2"
                                value="2"
                                checked={line === '2'}
                                onChange={(e) =>
                                    handleChangeLineNumber(e.target.value)
                                }
                            />
                            <div className="w-24 max-w-xl rounded-md bg-white p-2 text-gray-300 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-main peer-checked:ring-main peer-checked:ring-offset-0">
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-semibold uppercase text-gray-500">
                                            2 dòng
                                        </p>
                                        <FontAwesomeIcon
                                            icon={faCircleCheck}
                                            className="text-xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div className="flex items-center border-t-gray-300 mb-6">
                        <Select
                            value={currentUmbrella.id}
                            onValueChange={(value) =>
                                handleChangeUmbrella(value)
                            }
                        >
                            <SelectTrigger className="py-2 mr-4 rounded focus:ring-0">
                                <SelectValue
                                    defaultValue={currentUmbrella.id}
                                />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel className="text-main font-bold">
                                        Loại ô
                                    </SelectLabel>
                                    {umbrellas.map((umbrella) => (
                                        <SelectItem
                                            key={umbrella.id}
                                            value={umbrella.id}
                                            className="checked:bg-red-300"
                                        >
                                            {umbrella.name}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Select
                            value={handle?.value}
                            onValueChange={(value) =>
                                handleChangeKindWood(value)
                            }
                        >
                            <SelectTrigger className="py-2 rounded focus:ring-0">
                                <SelectValue defaultValue={handle?.value} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel className="text-main font-bold">
                                        Loại tay cầm
                                    </SelectLabel>
                                    {currentUmbrella.handle.map((handle) => (
                                        <SelectItem
                                            key={handle.id}
                                            value={handle.value}
                                        >
                                            {
                                                kindHandle.find(
                                                    (wood) =>
                                                        wood.value ===
                                                        handle.value,
                                                )?.name
                                            }
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="border-t-gray-300 py-4 border-t">
                        {line === '2' && (
                            <p className="font-bold text-center">Dòng 1</p>
                        )}
                        <EditContent
                            fontSize={size || sizeP}
                            letterSpacing={spacing || spacingP}
                            onChangeContent={handleChangeContent1}
                            onChangeFontSize={handleChangeFontSize1}
                            onChangeLetterSpacing={handleChangeLetterSpacing1}
                        />
                    </div>
                    {line === '2' && (
                        <>
                            <div className="border-t-gray-300 py-4 border-t">
                                <p className="font-bold text-center">Dòng 2</p>
                                <EditContent
                                    fontSize={size2 || sizeP2}
                                    letterSpacing={spacing2 || spacingP2}
                                    onChangeContent={handleChangeContent2}
                                    onChangeFontSize={handleChangeFontSize2}
                                    onChangeLetterSpacing={
                                        handleChangeLetterSpacing2
                                    }
                                />
                            </div>
                            <div className="border-t-gray-300 border-t">
                                <div className="py-2 relative">
                                    <label
                                        className="pr-6 block"
                                        htmlFor="distance"
                                    >
                                        Khoảng cách 2 dòng:
                                    </label>
                                    <span className="font-bold text-main absolute left-1/2 -translate-x-1/2">
                                        {distance}
                                    </span>
                                    <Slider
                                        defaultValue={[
                                            parseInt(distance || distanceP),
                                        ]}
                                        min={-20}
                                        max={20}
                                        name="distance"
                                        step={1}
                                        className="mt-8"
                                        onValueChange={(value) =>
                                            handleChangeLineHeight(value)
                                        }
                                    />
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </Modal>
            <div className="mt-6">
                {engraveFonts.map((font, key) => (
                    <div
                        key={key}
                        style={font.style}
                        className="w-full overflow-hidden justify-center pb-6 relative"
                    >
                        <span className="max-sm:text-sm text-xl absolute max-sm:top-2 max-sm:left-2 top-4 left-4 z-10 flex max-sm:w-5 max-sm:h-5 w-10 h-10 rounded-full bg-main text-white justify-center items-center">
                            {key + 1}
                        </span>
                        <span
                            className="cursor-pointer md:text-md text-xs absolute max-sm:top-8 max-sm:left-2 top-16 left-4 z-10 flex max-sm:w-5 max-sm:h-5 w-10 h-10 rounded-full bg-main text-white justify-center items-center"
                            onClick={() =>
                                handleDownLoadImg(
                                    key,
                                    type || typeP,
                                    handleP || handlePP,
                                    line || lineP,
                                    name || nameP,
                                    size || sizeP,
                                    spacing || spacingP,
                                    name2 || nameP2,
                                    size2 || sizeP2,
                                    spacing2 || spacingP2,
                                    distance || distanceP,
                                )
                            }
                        >
                            <FontAwesomeIcon icon={faDownload} />
                        </span>
                        <Link
                            target="_blank"
                            href={{
                                pathname: `/detail/${currentUmbrella.sku}`,
                                query: {
                                    font: key,
                                    line: line || lineP,
                                    name: name || nameP,
                                    size: size || sizeP,
                                    spacing: spacing || spacingP,
                                    name2: name2 || nameP2,
                                    size2: size2 || sizeP2,
                                    spacing2: spacing2 || spacingP2,
                                    dis: distance || distanceP,
                                },
                            }}
                            className="font-sans absolute max-sm:bottom-8 max-sm:left-2 bottom-10 left-4 z-10 font-bold text-xs text-main"
                            // style={engraveFonts[10].style}
                        >
                            <FontAwesomeIcon icon={faLink} /> Xem chi tiết ảnh khắc
                        </Link>
                        <div className="flex items-center w-full overflow-hidden text-center leading-normal">
                            <Link
                                target="_blank"
                                href={{
                                    pathname: `/detail/${currentUmbrella.sku}`,
                                    query: {
                                        font: key,
                                        line: line || lineP,
                                        name: name || nameP,
                                        size: size || sizeP,
                                        spacing: spacing || spacingP,
                                        name2: name2 || nameP2,
                                        size2: size2 || sizeP2,
                                        spacing2: spacing2 || spacingP2,
                                        dis: distance || distanceP,
                                    },
                                }}
                            >
                                <div
                                    className="relative"
                                    id={`imgWithEngraved-${type}-${handleP}-${slugVn(
                                        name || nameP,
                                    )}-${size}-${spacing}${
                                        line === '2'
                                            ? `-${line}-${slugVn(
                                                  name2 || nameP2,
                                              )}-${size2}-${spacing2}-${distance}`
                                            : ''
                                    }-${key}`}
                                >
                                    <img
                                        src={handle.urlImg}
                                        alt="umbrella"
                                        className="handle-image"
                                    />
                                    <div className="content">
                                        <span
                                            className={`engrave ${handle.value}`}
                                            style={{
                                                width: `${currentUmbrella.sizeHandle}cm`,
                                                letterSpacing: `${spacing}px`,
                                                fontSize: `${size}pt`,
                                            }}
                                        >
                                            {name}
                                        </span>
                                        {line === '2' && (
                                            <span
                                                className={`engrave ${handle.value}`}
                                                style={{
                                                    width: `${currentUmbrella.sizeHandle}cm`,
                                                    letterSpacing: `${spacing2}px`,
                                                    fontSize: `${size2}pt`,
                                                    marginTop: `${distance}px`,
                                                }}
                                            >
                                                {name2}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <Suspense>
            <HomeSearchParam />
        </Suspense>
    )
}
