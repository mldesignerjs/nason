export type handleO = {
    value: string
    urlImg: string
    urlImgR: string
    id: string
}
export type handleA = handleO[]
export type textEngraveInImg = {
    handle: handleO['value']
    x: number
    y: number
    rotateX: number
    rotateY: number
    rotateZ: number
    scale: number
}
export type detailPage =
    | { imgSrc: string; texts: textEngraveInImg[] | null }[]
    | null

export type umbrellaO = {
    id: string
    name: string
    sku: string
    sizeHandle: number
    handle: handleA
    detailPage: detailPage
}
export type umbrellaA = umbrellaO[]
export type optionFonts = {
    id: string
    value: { className: string; style: { fontFamily: string } }
    label: string
}
