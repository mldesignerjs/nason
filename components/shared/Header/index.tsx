export interface HeaderProps {}

function Header(props: HeaderProps) {
    return (
        <header className="w-full fixed bg-white border-b border-gray-100 z-50">
            <div className="container mx-auto py-4">
                <div className="flex justify-between items-center">
                    <h2>Cảm ơn bạn đã lựa chọn chúng tôi.</h2>
                </div>
            </div>
        </header>
    )
}

export default Header
