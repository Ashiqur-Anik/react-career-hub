import { NavLink } from "react-router-dom";
import './Header.css'

const link = <>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/AppliedJobs">Applied Jobs</NavLink>
    <NavLink to="/Blog">Blog</NavLink>
</>

const Header = () => {
    return (
        <header className=" bg-white" >
            <div className="navbar max-w-7xl mx-auto text-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-300 rounded-box w-52 gap-3 text-base pl-5">
                            {link}
                        </ul>
                    </div>
                    <a className=" normal-case text-3xl font-semibold">CareerHub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-10 text-xl">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="p-3 text-black rounded-xl cursor-pointer bg-gradient-to-r from-[#4258ea] to-[#e641c5] hover:from-[#253bca] hover:to-[#b634b0] ">Star Applying</a>
                </div>
            </div>
        </header>
    );
};

export default Header;