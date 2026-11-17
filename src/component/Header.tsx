
export const Header = () => {
    return (
        <>
            <header className="bg-gray-500 flex">
                <div className=" flex w-full justify-between border shadow-lg p-2 bg-red-500">
                    <div className="left flex gap-3">
                        <span>Logo</span>
                        <span>Brooklyn</span>
                    </div>
                    <div className="right">
                        <nav className="flex gap-3">
                            <a href="#">Home</a>
                            <a href="#">Project</a>
                            <a href="#">Contact</a>
                            <a href="#">About</a>
                        </nav>
                    </div>
                </div>

            </header>
        </>
    )
}
