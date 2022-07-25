import React from 'react';

const MortgageBody: React.FC = () => {
 return (
    <div>
        <div className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 mx-5">
            <p className="my-5 px-5 font-medium">
                This special mortgage calculator can help you see how much money you could end up paying
                per month for your future home. The cost includes Toronto's 2022 property tax data, the average amount of 
                money spent on home insurance, a 5-year <a href="/learn?term=fixed-rate" className="after:content-['_↗'] ... hover:underline text-blue-600 hover:text-blue-800 visited:text-purple-600">fixed-rate</a> mortgage, 
                and an <a href="/learn?term=amort_period" className="after:content-['_↗'] ... hover:underline text-blue-600 hover:text-blue-800 visited:text-purple-600">amortization period</a> of 25 years. 
            </p>
        </div>
    </div>
 )
}

export default MortgageBody;