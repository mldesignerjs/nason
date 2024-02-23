import { umbrellaA } from '@/types'
import {
    faFacebook,
    faInstagram,
    faYoutube,
    faTiktok,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import localFont from 'next/font/local'

export const nameSite = 'MLD'
export const logo = '/logo.png'

export const listSocialMediaLink = [
    {
        src: 'https://facebook.com',
        text: 'Facebook',
        icon: <FontAwesomeIcon icon={faFacebook} />,
    },
    {
        src: 'https://instagram.com',
        text: 'Facebook',
        icon: <FontAwesomeIcon icon={faInstagram} />,
    },
    {
        src: 'https://youtube.com',
        text: 'Facebook',
        icon: <FontAwesomeIcon icon={faYoutube} />,
    },
    {
        src: 'https://tiktok.com',
        text: 'Facebook',
        icon: <FontAwesomeIcon icon={faTiktok} />,
    },
]

const font01 = localFont({ src: '../fonts/fonts-convert/font01.ttf' })
const font02 = localFont({ src: '../fonts/fonts-convert/font02.ttf' })
const font03 = localFont({ src: '../fonts/fonts-convert/font03.ttf' })
const font04 = localFont({ src: '../fonts/fonts-convert/font04.ttf' })
const font05 = localFont({ src: '../fonts/fonts-convert/font05.ttf' })
const font06 = localFont({ src: '../fonts/fonts-convert/font06.ttf' })
const font07 = localFont({ src: '../fonts/fonts-convert/font07.ttf' })
const font08 = localFont({ src: '../fonts/fonts-convert/font08.ttf' })
const font09 = localFont({ src: '../fonts/fonts-convert/font09.ttf' })
const font10 = localFont({ src: '../fonts/fonts-convert/font10.ttf' })
const font11 = localFont({ src: '../fonts/fonts-convert/font11.ttf' })
const font12 = localFont({ src: '../fonts/fonts-convert/font12.ttf' })
const font13 = localFont({ src: '../fonts/fonts-convert/font13.ttf' })
const font14 = localFont({ src: '../fonts/fonts-convert/font14.otf' })
const font15 = localFont({ src: '../fonts/fonts-convert/font15.ttf' })
const font16 = localFont({ src: '../fonts/fonts-convert/font16.otf' })
const font17 = localFont({ src: '../fonts/fonts-convert/font17.ttf' })
const font18 = localFont({ src: '../fonts/fonts-convert/font18.ttf' })
const font19 = localFont({ src: '../fonts/fonts-convert/font19.ttf' })
const font20 = localFont({ src: '../fonts/fonts-convert/font20.ttf' })

export const engraveFonts = [
    font01,
    font02,
    font03,
    font04,
    font05,
    font06,
    font07,
    font08,
    font09,
    font10,
    font11,
    font12,
    font13,
    font14,
    font15,
    font16,
    font17,
    font18,
    font19,
    font20,
]

export const NavLinks = [
    {
        href: '/',
        key: 'Home',
        text: 'Home',
    },
    {
        href: '/about',
        key: 'About',
        text: 'About',
    },
    {
        href: '/services',
        key: 'Services',
        text: 'Services',
    },
    {
        href: '/engrave',
        key: 'Engrave',
        text: 'Engrave',
    },
    {
        href: '/portfolio',
        key: 'Portfolio',
        text: 'Portfolio',
    },
    {
        href: '/news',
        key: 'News',
        text: 'News',
    },
    {
        href: '/contact',
        key: 'Contact',
        text: 'Contact',
    },
]

export const footerMenuList = []

export const sizeHandle = [
    {
        id: '0',
        name: '8 cm',
        value: 8,
    },
    {
        id: '1',
        name: '12 cm',
        value: 12,
    },
    {
        id: '2',
        name: '5.7 cm',
        value: 5.7,
    },
]

export const kindHandle = [
    {
        name: 'CN',
        value: 'cn',
    },
    {
        name: 'Trắc/Mun',
        value: 'tm',
    },
    {
        name: 'Nhựa cao cấp',
        value: 'nhua',
    },
]

export const umbrellas: umbrellaA = [
    {
        id: '0',
        name: 'Ô tự động',
        sku: 'aoc',
        sizeHandle: 5.7,
        handle: [
            {
                value: 'nhua',
                urlImg: 'o-td.jpg',
                urlImgR: '/o-td.jpg',
                id: '0',
            },
        ],
        detailPage: [
            {
                imgSrc: '/aoc-5-colors.jpg',
                texts: [
                    {
                        handle: 'nhua',
                        x: 50.8,
                        y: 10.5,
                        rotateX: 0,
                        rotateY: 0,
                        rotateZ: 90,
                        scale: 0.7,
                    },
                    {
                        handle: 'nhua',
                        x: 50.8,
                        y: 31,
                        rotateX: 0,
                        rotateY: 0,
                        rotateZ: 90,
                        scale: 0.7,
                    },
                    {
                        handle: 'nhua',
                        x: 50.8,
                        y: 51,
                        rotateX: 0,
                        rotateY: 0,
                        rotateZ: 90,
                        scale: 0.7,
                    },
                    {
                        handle: 'nhua',
                        x: 50.8,
                        y: 71.3,
                        rotateX: 0,
                        rotateY: 0,
                        rotateZ: 90,
                        scale: 0.7,
                    },
                    {
                        handle: 'nhua',
                        x: 50.8,
                        y: 91,
                        rotateX: 0,
                        rotateY: 0,
                        rotateZ: 90,
                        scale: 0.7,
                    },
                ],
            },
            {
                imgSrc: '/aoc-in-box.jpg',
                texts: [
                    {
                        handle: 'nhua',
                        x: 75.4,
                        y: 31.2,
                        rotateX: 0,
                        rotateY: 0,
                        rotateZ: -47,
                        scale: 1.04,
                    },
                ],
            },
            {
                imgSrc: '/aoc-handle.jpg',
                texts: [
                    {
                        handle: 'nhua',
                        x: 62.4,
                        y: 59.4,
                        rotateX: 12,
                        rotateY: -12,
                        rotateZ: -108,
                        scale: 2.06,
                    },
                ],
            },
            {
                imgSrc: '/aoc-khong-trung.jpg',
                texts: [
                    {
                        handle: 'nhua',
                        x: 62,
                        y: 50.25,
                        rotateX: 0,
                        rotateY: 0,
                        rotateZ: 90,
                        scale: 0.8,
                    },
                ],
            },
            {
                imgSrc: '/aoc-on-floor.jpg',
                texts: [
                    {
                        handle: 'nhua',
                        x: 36.05,
                        y: 50.25,
                        rotateX: 0,
                        rotateY: 0,
                        rotateZ: 90,
                        scale: 0.78,
                    },
                ],
            },
        ],
    },
    {
        id: '1',
        name: 'Chagoi',
        sizeHandle: 8,
        sku: 'chagoi',
        handle: [
            {
                value: 'tm',
                urlImg: 'chagoi-den.jpg',
                urlImgR: '/chagoi-den.jpg',
                id: '0',
            },
        ],
        detailPage: null,
    },
    {
        id: '2',
        name: 'G27',
        sku: 'g27',
        sizeHandle: 12,
        handle: [
            {
                value: 'cn',
                urlImg: 'g27-cn.jpg',
                urlImgR: '/g27-cn.jpg',
                id: '0',
            },
            {
                value: 'tm',
                urlImg: 'g27-trac.jpg',
                urlImgR: '/g27-trac.jpg',
                id: '1',
            },
        ],
        detailPage: [
            {
                imgSrc: '/g30-banner.jpg',
                texts: [
                    {
                        handle: 'cn',
                        x: 44.8,
                        y: 55.74,
                        rotateX: -46,
                        rotateY: 0,
                        rotateZ: -29,
                        scale: 0.68,
                    },
                    {
                        handle: 'cn',
                        x: 57.15,
                        y: 22.3,
                        rotateX: 34,
                        rotateY: 0,
                        rotateZ: -115,
                        scale: 0.66,
                    },
                    {
                        handle: 'cn',
                        x: 83,
                        y: 42.34,
                        rotateX: 41,
                        rotateY: -11,
                        rotateZ: -23,
                        scale: 0.7,
                    },
                ],
            },
            {
                imgSrc: '/tay-cam.jpg',
                texts: [
                    {
                        handle: 'cn',
                        x: 24.5,
                        y: 35,
                        rotateX: 10,
                        rotateY: 21,
                        rotateZ: 53,
                        scale: 2.3,
                    },
                ],
            },
            {
                imgSrc: '/g30-3-loai-go.jpg',
                texts: [
                    {
                        handle: 'cn',
                        x: 12.7,
                        y: 23,
                        rotateX: 14,
                        rotateY: 3,
                        rotateZ: 113,
                        scale: 1.5,
                    },
                    {
                        handle: 'tm',
                        x: 74,
                        y: 28,
                        rotateX: 15,
                        rotateY: 6,
                        rotateZ: -65,
                        scale: 1.5,
                    },
                    {
                        handle: 'tm',
                        x: 77,
                        y: 81,
                        rotateX: 15,
                        rotateY: 6,
                        rotateZ: 113,
                        scale: 1.5,
                    },
                ],
            },
            {
                imgSrc: '/mau-g30-1.jpg',
                texts: null,
            },
            {
                imgSrc: '/mau-g30-2.jpg',
                texts: null,
            },
            {
                imgSrc: '/mau-g30-3.jpg',
                texts: null,
            },
        ],
    },
    {
        id: '3',
        name: 'G30',
        sku: 'g30',
        sizeHandle: 12,
        handle: [
            {
                value: 'cn',
                urlImg: 'g30-cn.jpg',
                urlImgR: '/g30-cn.jpg',
                id: '0',
            },
            {
                value: 'tm',
                urlImg: 'g30-trac.jpg',
                urlImgR: '/g30-trac.jpg',
                id: '1',
            },
        ],
        detailPage: [
            {
                imgSrc: '/g30-banner.jpg',
                texts: [
                    {
                        handle: 'cn',
                        x: 44.8,
                        y: 55.74,
                        rotateX: -46,
                        rotateY: 0,
                        rotateZ: -29,
                        scale: 0.68,
                    },
                    {
                        handle: 'cn',
                        x: 57.15,
                        y: 22.3,
                        rotateX: 34,
                        rotateY: 0,
                        rotateZ: -115,
                        scale: 0.66,
                    },
                    {
                        handle: 'cn',
                        x: 83,
                        y: 42.34,
                        rotateX: 41,
                        rotateY: -11,
                        rotateZ: -23,
                        scale: 0.7,
                    },
                ],
            },
            {
                imgSrc: '/tay-cam.jpg',
                texts: [
                    {
                        handle: 'cn',
                        x: 24.5,
                        y: 35,
                        rotateX: 10,
                        rotateY: 21,
                        rotateZ: 53,
                        scale: 2.3,
                    },
                ],
            },
            {
                imgSrc: '/g30-3-loai-go.jpg',
                texts: [
                    {
                        handle: 'cn',
                        x: 12.7,
                        y: 23,
                        rotateX: 14,
                        rotateY: 3,
                        rotateZ: 113,
                        scale: 1.5,
                    },
                    {
                        handle: 'tm',
                        x: 74,
                        y: 28,
                        rotateX: 15,
                        rotateY: 6,
                        rotateZ: -65,
                        scale: 1.5,
                    },
                    {
                        handle: 'tm',
                        x: 77,
                        y: 81,
                        rotateX: 15,
                        rotateY: 6,
                        rotateZ: 113,
                        scale: 1.5,
                    },
                ],
            },
            {
                imgSrc: '/mau-g30-1.jpg',
                texts: null,
            },
            {
                imgSrc: '/mau-g30-2.jpg',
                texts: null,
            },
            {
                imgSrc: '/mau-g30-3.jpg',
                texts: null,
            },
        ],
    },
]
