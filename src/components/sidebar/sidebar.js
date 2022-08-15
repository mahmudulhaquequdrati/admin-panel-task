/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import menuIcon from '../../Assets/icons8-menu.svg';

import { menuApp, menuComponents, menuItem, menuLaout } from '../menuArrays';

export default function Sidebar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`px-2 bg-[#010422] pb-1 min-h-screen ${menuOpen ? 'w-1/5 ' : 'w-full'}`}>
            <div className={`flex ${menuOpen ? 'justify-center' : 'justify-end'}`}>
                <img src={menuIcon} onClick={menuClick} alt="menu icon" className="mt-4 mb-2 w-4" />
            </div>
            <div>
                {!menuOpen && <p className="text-gray-300 text-[0.65rem]">MENU</p>}
                {menuItem.map((menu) => (
                    <div key={menu.name} className="flex justify-between my-2 items-center">
                        <div className="flex gap-3 items-center">
                            <div className={`w-4 ${menuOpen ? 'w-6' : 'w-4'}`}>
                                {menu?.icon && <img src={menu?.icon} className="w-5 h-4" alt="" />}
                            </div>
                            {!menuOpen && (
                                <p
                                    className="font-semibold text-[0.75rem]"
                                    style={{
                                        color: menu.color,
                                    }}
                                >
                                    {menu.name}
                                </p>
                            )}
                        </div>
                        {menu?.arrow && !menuOpen && (
                            <img src={menu.arrow} alt="" className="w-5 h-4" />
                        )}
                    </div>
                ))}
            </div>
            <div>
                {!menuOpen && <p className="text-gray-300 text-[0.6rem] pb-2 mt-1">APPLICATIONS</p>}
                {menuApp.map((menu) => (
                    <div key={menu.name} className="flex justify-between items-center mb-1">
                        <div className="flex gap-3 items-center">
                            <img
                                src={menu.icon}
                                alt=""
                                className={`w-4 ${menuOpen ? 'w-6' : 'w-4'}`}
                            />
                            {!menuOpen && <p className=" text-white text-[0.75rem]">{menu.name}</p>}
                        </div>
                        {!menuOpen && (
                            <div>
                                <div className="flex gap-2 items-center">
                                    <div className="px-2 py-1 rounded-md">
                                        <p className="text-red-400 text-xs">{menu.text}</p>
                                    </div>
                                    <img src={menu.arrow} alt="" />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div>
                {!menuOpen && <p className="text-gray-300 text-[0.6rem] py-2 mt-1">LAYOUT</p>}
                {!menuOpen && <p className="text-gray-300 text-[0.6rem] ">PAGES</p>}

                {menuLaout.map((menu) => (
                    <div key={menu.name} className="flex justify-between items-center mt-1">
                        <div className="flex gap-3 items-center">
                            <img
                                src={menu.icon}
                                alt=""
                                className={`w-4 ${menuOpen ? 'w-6' : 'w-4'}`}
                            />
                            {!menuOpen && <p className="text-white text-[0.75rem]">{menu.name}</p>}
                        </div>
                        {!menuOpen && (
                            <div>
                                <div className="w-4 bg-cyan-400 mx-auto mr-3 px-1 rounded-lg">
                                    <p className="text-white">{menu.number}</p>
                                </div>
                                <img src={menu.arrow} alt="" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div>
                {!menuOpen && <p className="text-gray-300 text-[0.6rem] pt-2 mt-1">COMPONENTS</p>}
                {menuComponents.map((menu) => (
                    <div key={menu.name} className="flex justify-between items-center mt-1">
                        <div className="flex gap-3 items-center">
                            <img
                                src={menu.icon}
                                alt=""
                                className={`w-4 ${menuOpen ? 'w-6' : 'w-4'}`}
                            />
                            {!menuOpen && <p className="text-white text-[0.75rem]">{menu.name}</p>}
                        </div>
                        {!menuOpen && (
                            <div>
                                <img src={menu.arrow} alt="" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
