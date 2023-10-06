import { NavLink } from "react-router-dom";

function Footer(){
    return (
        <footer className="bg-white text-black h-1/4 absolute bottom-0 min-w-full">
            <div className="flex flex-wrap justify-between h-full">
                <div className="w-2/4 flex justify-center items-center">Logo</div>
                <div className="flex flex-wrap justify-between w-2/4">
                    <div className="flex-1">
                        <ul className="h-full flex flex-col gap-3 justify-center items-start">
                            <NavLink to="/privacy" className="hover:text-blue-800 hover:rounded-l duration-200 cursor-pointer">Privacy</NavLink>
                            <NavLink to="/terms" className="hover:text-blue-800 hover:rounded-l duration-200 cursor-pointer">Terms</NavLink>
                            <NavLink to="/license" className="hover:text-blue-800 hover:rounded-l duration-200 cursor-pointer">License</NavLink>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <ul className="h-full flex flex-col gap-3 justify-center items-start">
                            <NavLink to="/downloads" className="hover:text-blue-800 hover:rounded-l duration-200 cursor-pointer">Downloads</NavLink>
                            <NavLink to="/profile" className="hover:text-blue-800 hover:rounded-l duration-200 cursor-pointer">Profile</NavLink>
                            <NavLink to="/files" className="hover:text-blue-800 hover:rounded-l duration-200 cursor-pointer">Files</NavLink>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <ul className="h-full flex flex-col gap-3 justify-center items-start">
                            <NavLink to="/github" className="hover:text-blue-800 hover:rounded-l duration-200 cursor-pointer">Github</NavLink>
                            <NavLink to="/socials" className="hover:text-blue-800 hover:rounded-l duration-200 cursor-pointer">Socials</NavLink>
                            <NavLink to="/keylogs" className="hover:text-blue-800 hover:rounded-l duration-200 cursor-pointer">Keylogs</NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;