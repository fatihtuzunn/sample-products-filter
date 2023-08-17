"use client"

import Image from 'next/image'
import Cards from './_components/Cards/Cards'
import { useState } from 'react'
/* import { data } from "@/app/mock"
 */import { Users as data } from "./_utils/UserData";
import Filter from './_components/Filter'

export default function Home() {
  const [filteredData, setFilteredData] = useState(data);

  return (
    <div className="container px-5 py-24 mx-auto flex flex-wrap">


      <div className="h-full p-4 lg:w-1/3">

        <div className=" bg-gray-100 px-8 pt-16 pb-16 ">
          <Filter data={data} setData={setFilteredData} />
        </div>


      </div>




      <div className="h-full p-4 lg:w-2/3">
        <Cards data={filteredData} />
      </div>

    </div >


  )
}
