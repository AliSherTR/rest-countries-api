import { HiMoon } from "react-icons/hi";
function Navbar() {
    return (
        <header className=" h-16 flex items-center shadow-md bg-white">
            <nav className="max-w-7xl flex-1 m-auto flex items-center justify-between">
                <h1 className=" font-bold md:text-lg text-base text-black capitalize">
                    where in the world?
                </h1>
                <div>
                    <button className="text-xl">
                        <HiMoon />
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
