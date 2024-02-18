import { optionFonts } from '@/types'
import { useState } from 'react'

interface SelectProps {
    options: optionFonts[]
    defaultObject: optionFonts
    onChange: (option: optionFonts) => void
}

const Select: React.FC<SelectProps> = ({
    options,
    defaultObject,
    onChange,
}) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleButtonClick = () => {
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (option: optionFonts) => {
        setIsOpen(false)
        onChange(option)
    }

    return (
        <div className="select">
            <button
                className="select-button"
                onClick={handleButtonClick}
                style={defaultObject.value.style}
            >
                {`${defaultObject.id + 1} - ${defaultObject.label}`}
            </button>
            <ul className={`options ${isOpen ? 'open' : ''}`}>
                {options.map((option, index) => (
                    <li
                        key={index}
                        className="option"
                        onClick={() => handleOptionClick(option)}
                        style={option.value.style}
                    >
                        {option.id} - {option.label}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Select
