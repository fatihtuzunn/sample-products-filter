import React, { useEffect } from 'react'
import MultiRangeSlider from './Slider/MultiRangeSlider';

function Filter({ data, setData }) {
    const [location, setLocation] = React.useState("All");
    const [name, setName] = React.useState("");
    const [ageMin, setAgeMin] = React.useState();
    const [ageMax, setAgeMax] = React.useState();
    const [price, setPrice] = React.useState("All");
    const [type, setType] = React.useState("All");

    //   const [search, setSearch] = React.useState("");

    const handlelocationChange = (event) => {
        setLocation(event.target.value);
    };
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleRangeChange = (min, max) => {
        setAgeMin(min);
        setAgeMax(max);
    };
    const handlepriceChange = (event) => {
        setPrice(event.target.value);
    };
    const handletypeChange = (event) => {
        setType(event.target.value);
    };

    const priceRe = /\$(.*)\/month/;



    useEffect(() => {
        let filteredData = data;

        if (location !== "All") {
            filteredData = filteredData.filter((el) => el.location === location);
        }

        filteredData = filteredData.filter((el) => {


            return el.age >= ageMin && el.age < ageMax;
        });


        if (name !== "") {
            filteredData = filteredData.filter((item) => {
                const fullName = `${item.first_name} ${item.last_name}`;
                if (fullName.toLowerCase().includes(name.toLowerCase())) {
                    return item;
                }
            });

            setData(filteredData);
        }

        if (price != "All") {
            const split = price.split("-");
            const lowerBound = Number(split[0]);
            const upperBound = Number(split[1]);

            filteredData = filteredData.filter((el) => {
                // "$3,050/month"
                const [_, match] = el.price.match(priceRe);
                const dataPrice = Number(match.replace(",", ""));

                return dataPrice >= lowerBound && dataPrice < upperBound;
            });
        }

        if (type !== "All") {
            filteredData = filteredData.filter((el) => el.type === type);
        }

        setData(filteredData);
    }, [location, name, type, price, ageMin, ageMax]);

    return (
        <div>
            <div class="mb-6">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                <input value={name} onChange={handleNameChange} type="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
            </div>
            <div className="relative inline-flex text-red-700">
                <svg className="w-4 h-4 absolute top-0 right-0 m-3 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
                <select className="border rounded-full border-gray-300 text-gray-600 h-10 pl-2 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                    <option>Choose a color</option>
                    <option>Red</option>
                    <option>Blue</option>
                    <option>Yellow</option>
                    <option>Black</option>
                    <option>Orange</option>
                    <option>Purple</option>
                    <option>Gray</option>
                    <option>White</option>
                </select>
            </div>

            <div className='mt-5 '>
                <h3 className='mb-5'>asas</h3>
                <MultiRangeSlider
                    min={18}
                    max={100}
                    onChange={({ min, max }) => handleRangeChange(min, max)}

                />
            </div>




        </div>
    )
}

export default Filter