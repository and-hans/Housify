/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Example() {
    return (
      <>
      <div className="mt-10 sm:mt-0">
          <div className="">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900 mt-7 text-center">House Information</h3>
                <p className="mt-1 text-sm text-gray-600 text-center my-5">Tell us about the house you want to purchase.</p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-7">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="home-price" className="block text-sm font-medium text-gray-700">
                          Home Price
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                            $
                          </span>
                          <input
                            type="text"
                            name="home-price"
                            id="home-price"
                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder="Enter the price of the home you're estimating for"
                          />
                        </div>
                      </div>
  
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="down-payment" className="block text-sm font-medium text-gray-700">
                          Down Payment
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                            $
                          </span>
                          <input
                            type="text"
                            name="company-website"
                            id="company-website"
                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder="Enter any down payment you're planning to use towards the home"
                          />
                        </div>
                      </div>
  
                      <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="rate" className="block text-sm font-medium text-gray-700">
                          Type of Rate
                        </label>
                        <select
                          id="rate"
                          name="rate"
                          autoComplete="rate-name"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>Select an item</option>
                          <option>Fixed (default)</option>
                          <option>Variable</option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="term" className="block text-sm font-medium text-gray-700">
                          Mortgage Term
                        </label>
                        <select
                          id="term"
                          name="term"
                          autoComplete="term-limit"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>Select an item</option>
                          <option>1 year</option>
                          <option>2 years</option>
                          <option>3 years</option>
                          <option>4 years</option>
                          <option>5 years (default)</option>
                          <option>6 years</option>
                          <option>7 years</option>
                          <option>8 years</option>
                          <option>9 years</option>
                          <option>10 years</option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="amortization" className="block text-sm font-medium text-gray-700">
                          Amortization Period
                        </label>
                        <select
                          id="amortization"
                          name="amortization"
                          autoComplete="amortization-period"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>Select an item</option>
                          <option>5 years</option>
                          <option>10 years</option>
                          <option>15 years</option>
                          <option>20 years</option>
                          <option>25 years (default)</option>
                          <option>30 years</option>
                        </select>
                      </div>
  
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>

        <div>
          <div className="">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900 text-center">About You</h3>
                <p className="mt-1 text-sm text-gray-600 text-center mb-5">
                  Let's dig a bit deeper into your finances.
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="yearly-income" className="block text-sm font-medium text-gray-700">
                          Yearly Income
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                            $
                          </span>
                          <input
                            type="text"
                            name="yearly-income"
                            id="yearly-income"
                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder="Enter in your gross yearly income"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="monthly-expense" className="block text-sm font-medium text-gray-700">
                          Monthly Expenses
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                            $
                          </span>
                          <input
                            type="text"
                            name="monthly-expenses"
                            id="monthly-expenses"
                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder="Enter in your monthly expenses"
                          />
                        </div>
                      </div>
                    </div>
                   
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
  
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>
  
        <div className="mt-10 sm:mt-0">
          <div className="">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900 text-center">Type of Housing</h3>
                <p className="mt-1 text-sm text-gray-600 text-center mb-5">What is the home like?</p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <fieldset>
                      <legend className="sr-only">Types of Houses</legend>
                      <div className="text-base font-medium text-gray-900" aria-hidden="true">
                        Types of Houses
                      </div>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="Detached"
                              name="Detached"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="Detached" className="font-medium text-gray-700">
                              Detached
                            </label>
                            <p className="text-gray-500">One standalone house.</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="Semi-detached"
                              name="Semi-detached"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="Semi-detached" className="font-medium text-gray-700">
                              Semi-detached
                            </label>
                            <p className="text-gray-500">Two houses in one large unit.</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="Townhouse"
                              name="Townhouse"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="Townhouse" className="font-medium text-gray-700">
                              Townhouse
                            </label>
                            <p className="text-gray-500">Multiple houses attached together.</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="Condo"
                              name="Condo"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="Condo" className="font-medium text-gray-700">
                              Condo
                            </label>
                            <p className="text-gray-500">An expensive apartment you own.</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="Apartment"
                              name="Apartment"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="Apartment" className="font-medium text-gray-700">
                              Apartment
                            </label>
                            <p className="text-gray-500">Comprised of many multiple small units in a building.</p>
                          </div>
                        </div>
                      </div>
                      
                    </fieldset>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }