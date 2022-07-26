import React from 'react';

const About: React.FC = () => {
    return(
        <>
        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">18%</dt>
                        <dd className="font-light text-gray-500 dark:text-gray-400">On my physics midterm</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">1B+</dt>
                        <dd className="font-light text-gray-500 dark:text-gray-400">Toilets in stock</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">4M+</dt>
                        <dd className="font-light text-gray-500 dark:text-gray-400">Taco's eaten</dd>
                    </div>
                </dl>
            </div>
        </section>
        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <figure className="max-w-screen-md mx-auto">
                    <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                    </svg> 
                    <blockquote>
                        <p className="text-2xl font-medium text-gray-900 dark:text-white">"Housify is so great, but i'm still afraid of bigfoot."</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                            <div className="pr-3 font-medium text-gray-900 dark:text-white">Janet K.</div>
                            <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO of Prada (maybe)</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Helping everyone feel at home </h2>
                    <p className="mb-4 font-light">
                    In the current housing market, home buyers face tremendous challenges when looking to purchase their first home.
                    A study found that 28% of people who recently bought a house thought it was more stressful than finding a job, 23% 
                    found it to be worse than planning a wedding, and 18% even thought it was worse than having a child. Housify has the potential to streamline 
                    the search for suitable housing. With our automated approach to analysing the housing market as well as the economic conditions of regions within the GTA, 
                    we can provide users with reliable housing recommendations based on their preferences efficiently. The struggle of navigating the overwhelming amount of 
                    information available will also be reduced. This is because our model gathers and analyses data from a vast array of sources for the user. 
                    Overall, we expect to see a significant reduction in home-buying stress for Housify users alongside time-saving benefits.
                    </p>
                    <a href="/learn" className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
                        Learn more
                        <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
        </section>
        </>
    )
}

export default About;