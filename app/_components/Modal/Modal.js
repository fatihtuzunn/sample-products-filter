import React from 'react'

function Modal({ showModal, setShowModal, modalData }) {
    return (
        showModal ? (
            <>
                <div
                    className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div
                        class="relative z-10 flex min-h-screen h-auto justify-center items-center"
                    >
                        <div class="relative max-w-4xl max-sm:max-w-xs">
                            <div
                                style={{ backgroundColor: "#FF006D" }}
                                class="absolute z-10 inset-0 bg-gradient-to-r shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"
                            ></div>
                            <div
                                class="relative z-20 bg-white md:flex justify-between p-12 shadow-lg rounded-lg w-full max-w-4xl"
                            >
                                <div
                                    class="sm:flex flex-col justify-between space-y-6 py-6 md:pr-10"
                                >
                                    <div>
                                        {/* <h2 class="text-lg">Hello, I am</h2> */}
                                        <h1 class="pt-1 text-5xl font-bold text-gray-800">
                                            {modalData.name} {modalData.surname}
                                        </h1>
                                    </div>
                                    <p class="text-xl leading-relaxed">
                                        Full-stack web developer who crafts beautiful
                                        websites that help your business grow online
                                    </p>
                                    <div className='flex justify-around '>
                                        <p class="text-xl leading-relaxed mr-auto">
                                            <span className='font-bold'>City:</span> {modalData.city}
                                        </p>
                                        <p class="text-xl leading-relaxed mr-auto">
                                            <span className='font-bold'>Age:</span> {modalData.age}
                                        </p>
                                    </div>

                                    <p class="text-xl leading-relaxed ">
                                        <span className='font-bold'>School:</span> {modalData.school_name}
                                    </p>



                                    <div className='flex justify-between'>
                                        <div>
                                            <div>
                                                <h2 class="text-lg font-bold mb-2">İletişim bilgileri:</h2>

                                            </div>
                                            <ul>
                                                <li >
                                                    <a href="tel:+31620842105" class="inline-block h-12 -my-4 xs:h-auto underline hover:no-underline">
                                                        <svg class="inline-block w-4 h-4 mr-3 opacity-40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                                        </svg>{modalData.phone}
                                                    </a>
                                                </li>
                                                <li>
                                                    <svg class="inline-block w-4 h-4 mr-3 opacity-40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                                    </svg>
                                                    <a class="inline-block h-12 -my-4 xs:h-auto underline hover:no-underline" href="mailto:john@doe.com">{modalData.email}</a>
                                                </li>
                                                <li>
                                                    <svg class="inline-block w-4 h-3 mr-3 -mt-1 opacity-40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                                                    </svg>
                                                    <a class="inline-block h-12 -my-4 xs:h-auto underline hover:no-underline" href="#" target="_blank" rel="noreferrer noopener">LinkedIn</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <div>
                                                <h2 class="text-lg font-bold">İlgi alanları</h2>

                                            </div>

                                            <div
                                                class="
            flex flex-wrap
            justify-starts
            items-center
            py-3
            
            text-xs text-white
            font-medium
          "
                                            >

                                                {modalData.hobbies.slice(0, 3).map(hobby => (
                                                    <a href="#" class="m-1 px-2 py-1 rounded bg-green-500"> #{hobby} </a>

                                                ))}

                                            </div>
                                        </div>


                                    </div>


                                    <div class="flex flex-col w-full" >
                                        <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
                                            <div class="instagram metric-card bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 max-w-72 w-full" >
                                                <a aria-label="Unsplash Downloads" target="_blank" rel="noopener noreferrer" href="https://stackdiary.com/">
                                                    <div class="flex items-center text-gray-900 dark:text-gray-100" >
                                                        Instagram Followers
                                                        <svg class="h-4 w-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                                        </svg>
                                                    </div>
                                                </a>
                                                <p class="mt-2 text-3xl font-bold spacing-sm text-black dark:text-white" >
                                                    {modalData.insta.followers}
                                                </p>
                                                <div class="flex items-center text-gray-900 mt-2" >
                                                    Instagram Avarage Like
                                                </div>

                                                <p class="mt-2 text-3xl font-bold spacing-sm text-black dark:text-white" >
                                                    {modalData.insta.average_like}
                                                </p>
                                            </div>
                                            <div class="tiktok metric-card dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 max-w-72 w-full" >
                                                <a aria-label="Unsplash Views" target="_blank" rel="noopener noreferrer" href="https://stackdiary.com/">
                                                    <div class="flex items-center text-gray-100" >Tiktok Followers
                                                        <svg class="h-4 w-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                                        </svg>
                                                    </div>
                                                </a>
                                                <p class="mt-2 text-3xl font-bold spacing-sm text-white dark:text-white" >{modalData.tiktok.followers}</p>

                                                <div class="flex items-center text-gray-100 mt-2" >
                                                    Tiktok Avarage Like
                                                </div>

                                                <p class="mt-2 text-3xl font-bold spacing-sm text-white dark:text-white" >{modalData.insta.average_like}</p>
                                            </div>
                                        </div>
                                        <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
                                            <div class="metric-card bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 max-w-72 w-full" >
                                                <a aria-label="YouTube Subscribers" target="_blank" rel="noopener noreferrer" href="https://stackdiary.com/">
                                                    <div class="flex items-center text-gray-900 dark:text-gray-100" >Avarage Like
                                                        <svg class="h-4 w-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                                        </svg>
                                                    </div>
                                                </a>
                                                <p class="mt-2 text-3xl font-bold spacing-sm text-black dark:text-white" >56</p>
                                            </div>
                                            <div class="metric-card bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 max-w-72 w-full" >
                                                <a aria-label="YouTube Views" target="_blank" rel="noopener noreferrer" href="https://stackdiary.com/">
                                                    <div class="flex items-center text-gray-900 dark:text-gray-100">Total Post Number
                                                        <svg class="h-4 w-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                                        </svg>
                                                    </div>
                                                </a>
                                                <p class="mt-2 text-3xl font-bold spacing-sm text-black dark:text-white" >5</p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div>
                                    <img
                                        src="https://5.imimg.com/data5/SELLER/Default/2020/12/GT/AM/NY/117268287/best-apartments-and-flats-construction-company-in-india-500x500.jpg"
                                        alt=""
                                        style={{ width: "250px", height: "200px" }}
                                        class="flex-shrink-0 rounded-full border-6 border-white shadow-md"
                                    />
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Save Changes
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/*  <div className=" w-auto my-6 ">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className='flex justify-between'>

                                <div className='flex flex-col '>
                                    <div className='w-auto'>
                                        <div class=" sm:px-0">
                                            <h3 class="text-base font-semibold leading-7 text-gray-900">Applicant Information</h3>
                                            <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
                                        </div>
                                        <div class="mt-6 border-t border-gray-100">
                                            <dl class="divide-y divide-gray-100">
                                                <div class=" py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt class="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                                                    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Margot Foster</dd>
                                                </div>
                                                <div class=" py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt class="text-sm font-medium leading-6 text-gray-900">Application for</dt>
                                                    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Backend Developer</dd>
                                                </div>
                                                <div class=" py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt class="text-sm font-medium leading-6 text-gray-900">Email address</dt>
                                                    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
                                                </div>
                                                <div class=" py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt class="text-sm font-medium leading-6 text-gray-900">Salary expectation</dt>
                                                    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">$120,000</dd>
                                                </div>
                                                <div class=" py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt class="text-sm font-medium leading-6 text-gray-900">About</dt>
                                                    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</dd>
                                                </div>

                                            </dl>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col'>assaasfsafsafs</div>
                                <div className='flex flex-col'>assaasfsafsafs</div>



                            </div>
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>
                                <button
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        ) : null
    )
}

export default Modal