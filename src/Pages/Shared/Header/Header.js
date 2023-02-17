import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar h-20 mb-12 pt-12 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='font-semibold'><Link to="/">Home</Link></li>
                        <li className='font-semibold'><Link to="/">About</Link></li>
                        <li className='font-semibold'><Link to="/">Contact Us</Link></li>
                        <li className='font-semibold'><Link to="/login">Login</Link></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">Job portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='font-semibold'><Link to="/">Home</Link></li>
                    <li className='font-semibold'><Link to="/">About</Link></li>
                    <li className='font-semibold'><Link to="/">Contact Us</Link></li>
                    <li className='font-semibold'><Link to="/login">Login</Link></li>
                </ul>
            </div>
            <div className="navbar-end me-5">
                {/* <button className="btn btn-outline btn-warning">Appointment</button> */}
                <label for="check" className='bg-gray-300 cursor-pointer relative w-20 h-10 rounded-full'>
                    <input type="checkbox" name="" id="check" className='sr-only peer' />
                    <span className="w-2/5 h-4/5 bg-rose-700 absolute rounded-full left-1 top-1 peer-checked:bg-rose-800 peer-checked:left-11 transition-all duration-500"></span>

                </label>
            </div>
        </div>
    );
};

export default Header;