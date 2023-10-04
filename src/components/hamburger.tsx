type HamburgerProps = {
    open: boolean
    handleIsOpen: () => void
}


const Hamburger = ({ open, handleIsOpen }: HamburgerProps) => {
    const hamburgerLine = `h-1 w-7 my-1 rounded-full bg-white transition ease transform duration-300`
    return (
        <div
            className="flex flex-col h-12 w-12 cursor-pointer"
            onClick={handleIsOpen}
        >
            <div
                className={`${hamburgerLine} ${
                    open ? 'rotate-45 translate-y-3' : ''
                }`}
            ></div>
            <div
                className={`${hamburgerLine} ${open ? 'opacity-0' : ''}`}
            ></div>
            <div
                className={`${hamburgerLine} ${
                    open ? '-rotate-45 -translate-y-3' : ''
                }`}
            ></div>
        </div>
    )
}

export default Hamburger
