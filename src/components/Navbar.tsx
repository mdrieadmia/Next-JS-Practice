"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {

    const router = useRouter();
    const handleRouter = ()=>{
        router.push('/dashboard')
    }

    return (
        <div>
            <div className='w-full bg-amber-100 p-5 flex justify-end'>
                <Link className='text-black px-5' href="/about"> About </Link>
                <a className='text-black px-5' href="/setting"> Settings </a>
                <button onClick={handleRouter} className='text-black'>
                    Dashboard
                </button>
            </div>
        </div>
    );
};

export default Navbar;