"use client";
import { FileClock, Home, LogOut, Settings } from 'lucide-react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useClerk } from '@clerk/nextjs'; // Import useClerk to access signOut

function SideNav() {
    const MenuList = [
        {
            name: 'Home',
            icon: Home,
            path: '/dashboard'
        },
        {
            name: 'Setting',
            icon: Settings,
            path: '/dashboard/settings'
        },
        {
            name: 'Logout',
            icon: LogOut,
            path: '/'
        }
    ];

    const currentPath = usePathname();
    const router = useRouter();
    const { signOut } = useClerk(); // Use useClerk to access signOut

    useEffect(() => {
        console.log(currentPath);
    }, [currentPath]);

    const handleCopyright = () => {
        const mailToLink = `mailto:sahilbambarkar007@gmail.com?subject=Copyright%20Inquiry`;
        window.location.href = mailToLink;
    };

    const handleLogout = async () => {
        try {
            await signOut();
            router.push('/'); // Redirect to the main page after signing out
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <div className='h-screen relative p-5 shadow-sm border bg-white'>
            <div className='flex justify-center'>
                <Image src={'/logo.svg'} alt='logo' width={120} height={120} />
            </div>
            <hr className='my-6 border' />
            <div className='mt-3'>
                {MenuList.map((menu) => (
                    <div key={menu.path}>
                        {menu.name === 'Logout' ? (
                            <div
                                className={`flex gap-2 mb-2 p-4 rounded-lg cursor-pointer items-center 
                                ${currentPath === menu.path ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'}`}
                                onClick={handleLogout}
                            >
                                <menu.icon className='w-7 h-7' />
                                <h2 className='text-lg'>{menu.name}</h2>
                            </div>
                        ) : (
                            <Link href={menu.path} key={menu.path}>
                                <div
                                    className={`flex gap-2 mb-2 p-4 rounded-lg cursor-pointer items-center 
                                    ${currentPath === menu.path ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'}`}
                                >
                                    <menu.icon className='w-7 h-7' />
                                    <h2 className='text-lg'>{menu.name}</h2>
                                </div>
                            </Link>
                        )}
                    </div>
                ))}
            </div>
            <div className='absolute bottom-10 left-0 w-full text-center text-primary cursor-pointer' onClick={handleCopyright}>
                © 2024 Gen-Content All rights reserved.
            </div>
        </div>
    );
}

export default SideNav;