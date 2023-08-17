import React from 'react'

function Card({ item }) {
    return (
        <div className="w-[300px] max-w-sm bg-white overflow-hidden shadow-xl shadow-sky-200/30 ring-1 ring-sky-200/10 transition-all duration-500 ease-in-out p-2 hover:scale-105 rounded-2xl cursor-pointer	">
            <img className=" object-fill" src={item.insta.profile_pic} alt="profile" />
            <div className="px-4 py-6">
                <h2 className="font-bold text-2xl">{item?.name} {item?.surname}</h2>
                <p className=" text-lg text-gray-600 text-base">{item?.email}</p>
                {/*  <dl>
                    <dt className="font-bold mt-2">Total Followers:</dt>
                    <dd>"The Series has landed"</dd>

                </dl> */}

                <div className="flex flex-wrap align-center  mt-2 ">
                    <div className="mr-auto flex basis-1/2">
                        <p className="font-bold">Age: &nbsp;</p>
                        <p>{item?.age}</p>
                    </div>
                    <div className="mr-auto flex basis-1/2">
                        <p className="font-bold">Gender: &nbsp;</p>
                        <p>{item?.gender}</p>
                    </div>



                </div>
                <div className="mr-auto flex  basis-4 mt-1">
                    <p className="font-bold">Job: &nbsp;</p>
                    <p>{item?.job}</p>
                </div>
                <div className="mr-auto flex basis-1 mt-1">
                    <p className="font-bold">City: &nbsp;</p>
                    <p>{item?.city}</p>
                </div>
                {/*  <div className="flex align-center justify-around mt-2 border-t pt-2">
                    <div className="mr-auto flex">
                        <p className="font-bold">Age: &nbsp;</p>
                        <p>"24"</p>
                    </div>
                    <div className="mr-auto flex">
                        <p className="font-bold">Gender:</p>
                        <p>"24"</p>
                    </div>
                </div> */}
                <div className="flex mt-5">
                    <div className="mr-auto flex-[30%] text-center text-grey-900 p-1 ">
                        <span className="text-sm block font-semibold">{item.insta.followers + item.tiktok.followers}</span>
                        <span className="text-xs ">Total Followers</span>
                    </div>
                    <div className="flex-[30%] text-center text-grey-900 p-1 ">
                        <span className="text-sm block font-semibold">185</span><span className="text-xs">
                            Avarage Like
                        </span>

                    </div>

                </div>
            </div>
            <div className=" pb-4 bg-white">
                {item.hobbies?.slice(0, 3).map((hobby) => (
                    <span key={hobby} className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">#{hobby}</span>

                )

                )}

            </div>
        </div>
    )
}

export default Card