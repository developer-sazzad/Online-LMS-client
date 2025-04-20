import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
    FaBars,
    FaTachometerAlt,
    FaLayerGroup,
    FaChevronDown,
    FaChevronRight,
    FaFileAlt,
    FaLandmark,
    FaCreditCard,
    FaMoneyCheckAlt,
    FaQuestionCircle,
    FaMoon,
    FaSun
} from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useTheme from '../hooks/useTheme';

const menuItems = [
    {
        title: 'Dashboards',
        icon: <FaTachometerAlt />,
        path: '/dashboard',
        children: []
    },
    {
        title: 'Users',
        icon: <FaTachometerAlt />,
        path: 'users',
        children: []
    },
    {
        title: 'Courses',
        icon: <FaLayerGroup />,
        children: [
            { title: 'Add Video', path: '/courses' },
            { title: 'Add Course', path: '/courses' },

        ]
    },
    // Student er jonno
    {
        title: 'My Classes',
        icon: <FaLayerGroup />,
        children: [
            { title: 'Courses', path: '/courses' },
            { title: 'Conceptual', path: '/courses' },

        ]
    },
    {
        title: 'Front Pages',
        icon: <FaFileAlt />,
        children: [
            { title: 'Landing', path: '/front-pages/landing' },
            { title: 'Pricing', path: '/front-pages/pricing' },
            { title: 'Payment', path: '/front-pages/payment' },
            { title: 'Checkout', path: '/front-pages/checkout' },
            { title: 'Help Center', path: '/front-pages/help-center' }
        ]
    }
];

const DashboardLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [hovered, setHovered] = useState(false);
    const { isDarkMode, toggleTheme } = useTheme();
    const [openMenus, setOpenMenus] = useState({});

    const toggleMenu = (title) => {
        setOpenMenus((prev) => ({
            [title]: !prev[title]
        }));
    };

    return (
        <>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <div className={`transition-all duration-300 min-h-screen flex relative${isDarkMode ? 'bg-[#25273A] text-white' : 'bg-base text-base-700'
                }`}>
                {/* Left Sidebar */}
                <div
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    className={`transition-all duration-300 overflow-y-auto min-h-screen
                    ${collapsed ? 'absolute z-50' : 'relative'}
                    ${collapsed && !hovered ? 'w-16 px-2' : 'w-64 px-4'}
                    shadow-md py-8 bg-white dark:bg-[#25273A]`}
                >
                    <div className="flex items-center justify-between mb-6">
                        <h1 className={`font-bold ${collapsed && !hovered ? 'hidden' : ''}`}>DsEducation</h1>
                        <button className='cursor-pointer customBtn' onClick={() => setCollapsed(!collapsed)}>
                            <FaBars size={20} />
                        </button>
                    </div>
                    <ul className="space-y-2">
                        {menuItems.map((item, index) => {
                            const isOpen = openMenus[item.title];

                            return (
                                <li key={index}>
                                    {item.path ? (
                                        <NavLink
                                            to={item.path}
                                            className='customBtn'
                                        >
                                            {item.icon}
                                            {!(collapsed && !hovered) && <span>{item.title}</span>}
                                        </NavLink>
                                    ) : (
                                        <button
                                            onClick={() => toggleMenu(item.title)}
                                            className="w-full customBtn flex items-center justify-between gap-2 text-sm font-semibold"
                                        >
                                            <div className="flex items-center gap-2">
                                                <span className="text-lg">{item.icon}</span>
                                                {!(collapsed && !hovered) && <span>{item.title}</span>}
                                            </div>
                                            {!(collapsed && !hovered) && (isOpen ? <FaChevronDown /> : <FaChevronRight />)}
                                        </button>
                                    )}

                                    {!(collapsed && !hovered) && item.children && item.children.length > 0 && (
                                        <div
                                            className={`mt-1 overflow-hidden transition-all duration-500 ${isOpen ? 'opacity-100 max-h-screen' : 'max-h-0'
                                                }`}
                                        >
                                            <ul className="space-y-1">
                                                {item.children.map((child, cIndex) => (
                                                    <li key={cIndex}>
                                                        <NavLink
                                                            to={child.path}
                                                            className={({ isActive }) =>
                                                                `customBtn flex items-center gap-2 text-sm  ${isActive ? '' : ''
                                                                }`
                                                            }
                                                        >
                                                            <span className="text-base">{child.icon || '○'}</span>
                                                            <span>{child.title}</span>
                                                        </NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className={`flex-1 ${collapsed ? 'pl-16' : ''}`}>
                    <div className='flex items-center justify-between shadow py-4 px-8'>
                        <h2 className="text-xl font-semibold">Admin</h2>
                        <button
                            onClick={toggleTheme}
                            className="text-gray-600 hover:text-yellow-400"
                        >
                            {isDarkMode ? (
                                <FaMoon title="Switch to Light Mode" size={20} />
                            ) : (
                                <FaSun title="Switch to Dark Mode" size={20} />
                            )}
                        </button>
                    </div>
                    <div className={`min-h-[80%] ${isDarkMode ? 'bg-[#25293C]' : 'bg-[#F8F7FA] '} $`}> <Outlet></Outlet> </div>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;
