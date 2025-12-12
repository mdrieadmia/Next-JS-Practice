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
            <div className='w-full bg-slate-800 p-5 flex justify-end'>
                <Link className='text-white px-5' href="/about"> About </Link>
                <Link className='text-white px-5' href="/products"> Products </Link>
                <a className='text-white px-5' href="/setting"> Settings </a>
                <button onClick={handleRouter} className='text-black'>
                    Dashboard
                </button>
            </div>
        </div>
    );
};

export default Navbar;