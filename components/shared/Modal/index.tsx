import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

export interface ModalProps {
    children: React.ReactNode
}

function Modal({ children }: ModalProps) {
    return (
        <>
            <Sheet>
                <SheetTrigger className="fixed top-[18%] right-0 z-30 w-[50px] h-[50px] bg-white rounded border text-xl">
                    <FontAwesomeIcon
                        className="text-main text-xl"
                        icon={faPenToSquare}
                    />
                </SheetTrigger>
                <SheetContent className="bg-white flex flex-col gap-6 overflow-y-scroll">
                    <div className="flex items-center justify-center">
                        <Image
                            src="/logo-black.png"
                            alt="Logo"
                            width={150}
                            height={50}
                            className="h-auto"
                        />
                    </div>
                    <Separator className="border border-gray-50" />
                    {children}
                </SheetContent>
            </Sheet>
        </>
    )
}

export default Modal
