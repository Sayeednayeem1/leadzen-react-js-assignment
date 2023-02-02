import React from 'react';
import { Link } from 'react-router-dom';
import Time from '../Time/Time';
import 'animate.css';

const Navbar = () => {

    const navItems = <>
        <li className='text-xl font-bold text-white animate__animated animate__bounce'> <Link to='/'>Home</Link></li>
    </>

    return (
        <div className='container mx-auto'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <button className="btn btn-ghost text-white text-xl animate__animated animate__backInLeft">Abu Sayed</button>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn paginationButton animate__animated animate__backInRight"> <Time /> </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;