import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
            <div className="mx-auto max-w-screen-xl text-center">
                <a href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-6 sm:h-9 stroke-2 hover:stroke-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                    Housify    
                </a>
                <p className="my-6 text-gray-500 dark:text-gray-400">Helping you feel at home :)</p>
                <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="/" className="mr-4 hover:underline md:mr-6">Home</a>
                    </li>
                    <li>
                        <a href="/graphs" className="mr-4 hover:underline md:mr-6 ">Graphs</a>
                    </li>
                    <li>
                        <a href="/mortgage" className="mr-4 hover:underline md:mr-6">Mortgage Calculator</a>
                    </li>
                    <li>
                        <a href="/learn" className="mr-4 hover:underline md:mr-6">Learn</a>
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Banana" className="mr-4 hover:underline md:mr-6">Bananas</a>
                    </li>
                </ul>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2021-2022 <a href="#" className="hover:underline">Housify™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer;