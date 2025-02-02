import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from "next/link";

export interface ModalProps {
    children: React.ReactNode
}

function Modal({ children }: ModalProps) {
    return (
        <>
            <Sheet>
                <SheetTrigger className="fixed top-[18%] right-0 z-30 flex items-center p-4 gap-4 bg-white rounded border text-xl text-main font-bold">
                    <FontAwesomeIcon
                        className=""
                        icon={faPenToSquare}
                    /> Nội dung khắc
                </SheetTrigger>
                <SheetContent className="bg-white flex flex-col gap-6 overflow-y-scroll">
                    <div className="flex items-center justify-center">
                        <Link href='https://odunason.com' >
                        <Image
                            src="/logo-black.png"
                            alt="Ô dù Nason"
                            width={150}
                            height={50}
                            className="h-auto"
                            />
                        </Link>
                    </div>
                    <Separator className="border border-gray-50" />
                    {children}
                </SheetContent>
            </Sheet>
        </>
    )
}

export default Modal
