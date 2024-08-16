"use client"
import { UserButton } from '@clerk/nextjs';
import { Search } from 'lucide-react';
import React from 'react';

function Header() {
  const handleContactClick = () => {
    window.location.href = 'mailto:your-email@example.com?subject=Inquiry';
  };

  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between items-center bg-white'>
      <div className='flex gap-2 items-center p-2 rounded-md border max-w-lg bg-white'>
        <Search />
        <input type='text' placeholder='Search...' className='outline-none' />
      </div>
      <div className='flex items-center gap-4'>
        <div
          className='bg-primary p-2 rounded-md text-sm text-white px-3 font-bold cursor-pointer mr-3'
          onClick={handleContactClick}
        >
          🔥Contact Me🔥
        </div >
        <UserButton  />
      </div>
    </div>
  );
}

export default Header;