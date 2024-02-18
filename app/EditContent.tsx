import { Slider } from '@/components/ui/slider'
import { Input } from '@/components/ui/input'

export interface IEditContentProps {
    fontSize: string
    letterSpacing: string
    onChangeContent: Function
    onChangeFontSize: Function
    onChangeLetterSpacing: Function
}

export function EditContent({
    fontSize,
    letterSpacing,
    onChangeContent,
    onChangeFontSize,
    onChangeLetterSpacing,
}: IEditContentProps) {
    return (
        <>
            <div className="flex items-center py-2">
                <Input
                    type="text"
                    name="contentEngrave"
                    className="w-full py-2 px-2 rounded border bg-gray-100 text-main font-bold ring-offset-main focus-visible:ring-0"
                    placeholder="Nhập nội dung bạn muốn khắc"
                    onChange={(e) => onChangeContent(e.target.value)}
                />
            </div>
            <div className="py-2 relative">
                <label className="block" htmlFor="sizeEngrave">
                    Kích cỡ:
                </label>
                <span className="font-bold text-main absolute left-1/2 -translate-x-1/2">
                    {fontSize}
                </span>
                <Slider
                    defaultValue={[parseInt(fontSize)]}
                    min={10}
                    max={50}
                    step={1}
                    className="mt-8"
                    onValueChange={(value) => onChangeFontSize(value)}
                />
            </div>
            <div className="py-2 relative">
                <label className="block" htmlFor="letterSpacing">
                    Khoảng cách chữ:
                </label>
                <span className="font-bold text-main absolute left-1/2 -translate-x-1/2">
                    {letterSpacing}
                </span>

                <Slider
                    defaultValue={[parseInt(letterSpacing)]}
                    min={0}
                    max={10}
                    name="letterSpacing"
                    step={1}
                    className="mt-8"
                    onValueChange={(value) => onChangeLetterSpacing(value)}
                />
            </div>
        </>
    )
}
