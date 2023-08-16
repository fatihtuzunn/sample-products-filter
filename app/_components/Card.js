import React from 'react'

function Card({ item }) {
    return (
        <div class="w-[300px] max-w-sm bg-white overflow-hidden shadow-xl shadow-sky-200/30 ring-1 ring-sky-200/10 transition-all duration-500 ease-in-out p-2 hover:scale-105 rounded-2xl cursor-pointer	">
            <img class=" object-fill" src="https://m.media-amazon.com/images/M/MV5BZjUyOTJlZmMtMzVkNS00MTNkLTk5ZTAtOTEzNWMwNmNiY2MyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg" alt="Dr. Zoidberg holding out his claws" />
            <div class="px-4 py-6">
                <h2 class="font-bold text-2xl">{item?.name} {item?.surname}</h2>
                <p class=" text-lg text-gray-600 text-base">{item?.email}</p>
                <dl>
                    <dt class="font-bold mt-2">Total Followers:</dt>
                    <dd>"The Series has landed"</dd>

                </dl>

                <div class="flex flex-wrap align-center  mt-2 ">
                    <div class="mr-auto flex basis-1/2">
                        <p class="font-bold">Age: &nbsp;</p>
                        <p>{item?.age}</p>
                    </div>
                    <div class="mr-auto flex basis-1/2">
                        <p class="font-bold">Gender: &nbsp;</p>
                        <p>{item?.gender}</p>
                    </div>



                </div>
                <div class="mr-auto flex  basis-4 mt-1">
                    <p class="font-bold">Job: &nbsp;</p>
                    <p>{item?.job}</p>
                </div>
                <div class="mr-auto flex basis-1 mt-1">
                    <p class="font-bold">City: &nbsp;</p>
                    <p>{item?.city}</p>
                </div>
                <div class="flex align-center justify-around mt-2 border-t pt-2">
                    <div class="mr-auto flex">
                        <p class="font-bold">Age: &nbsp;</p>
                        <p>"24"</p>
                    </div>
                    <div class="mr-auto flex">
                        <p class="font-bold">Gender:</p>
                        <p>"24"</p>
                    </div>
                </div>
                <div class="flex mt-5">
                    <div class="mr-auto flex-[30%] text-center text-grey-900 p-1 ">
                        <span class="text-sm block font-semibold">{item.insta.followers + item.tiktok.followers}</span>
                        <span class="text-xs ">Total Followers</span>
                    </div>
                    <div class="flex-[30%] text-center text-grey-900 p-1 ">
                        <span class="text-sm block font-semibold">185</span><span class="text-xs">
                            Avarage Like
                        </span>

                    </div>

                </div>
            </div>
            <div class=" pb-4 bg-white">
                {item.hobbies?.slice(0, 3).map((hobby) => (
                    <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">#{hobby}</span>

                )

                )}

            </div>
        </div>
    )
}

export default Card