import React, { useEffect } from 'react'
import MultiRangeSlider from './Slider/MultiRangeSlider';
import { MultiSelect } from 'react-multi-select-component';



const multiSelectOptions = [
    { label: "Traveling", value: "Traveling" },
    { label: "Photography", value: "Photography" },
    { label: "Dancing", value: "Dancing" },
    { label: "Painting", value: "Painting" },

];



function Filter({ data, setData }) {
    const [multiSelected, setMultiSelected] = React.useState([]);

    const [name, setName] = React.useState("");
    const [ageMin, setAgeMin] = React.useState();
    const [ageMax, setAgeMax] = React.useState();
    const [followers, setFollowers] = React.useState("All");

    const [gender, setGender] = React.useState("All");

    //   const [search, setSearch] = React.useState("");


    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleRangeChange = (min, max) => {
        setAgeMin(min);
        setAgeMax(max);
    };
    const handleFollowersChange = (event) => {
        setFollowers(event.target.value);
    };






    useEffect(() => {

        let filteredData = data;

        const multiArr = multiSelected.map(item => item.value)



        if (multiArr.length > 0) {
            filteredData = filteredData.filter((el) => {
                return multiArr.some(r => el.hobbies.includes(r))


            }
            );
        }


        filteredData = filteredData.filter((el) => {


            return el.age >= ageMin && el.age < ageMax;
        });


        if (name !== "") {
            filteredData = filteredData.filter((item) => {
                const fullName = `${item.name} ${item.surname}`;
                if (fullName.toLowerCase().includes(name.toLowerCase())) {
                    return item;
                }
            });

            setData(filteredData);
        }

        if (followers != "All") {
            const split = followers.split("-");
            const lowerBound = Number(split[0]);
            const upperBound = Number(split[1]);

            filteredData = filteredData.filter((el) => {
                // "$3,050/month"

                const dataPrice = el.insta.followers + el.tiktok.followers

                return dataPrice >= lowerBound && dataPrice < upperBound;
            });
        }


        if (gender !== "All") {
            filteredData = filteredData.filter((el) => el.gender === gender);
        }

        setData(filteredData);
    }, [name, followers, ageMin, ageMax, gender, multiSelected]);

    return (
        <div>
            <div className='flex flex-col items-center '>
                <div>
                    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hobbies</label>


                    <MultiSelect
                        className='w-56 border rounded-lg border-gray-300 text-gray-600  bg-white hover:border-gray-400 focus:outline-none appearance-none'
                        options={multiSelectOptions}
                        value={multiSelected}
                        onChange={setMultiSelected}
                        labelledBy="Select"
                    />
                </div>


                <div className="mb-5">
                    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input value={name} onChange={handleNameChange} type="name" id="name" className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500  w-56 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="mb-5">
                    <label for="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>

                    <div className="relative inline-flex text-red-700">
                        <svg className="w-4 h-4 absolute top-0 right-0 m-3 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                        <select onChange={(e) => setGender(e.target.value)} className="w-56 border rounded-lg border-gray-300 text-gray-600 h-10 pl-2 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                            <option value="All">All</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>

                        </select>
                    </div>
                </div>
                <div>
                    <label for="followers" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Total Followers</label>

                    <div className="relative inline-flex text-red-700">
                        <svg className="w-4 h-4 absolute top-0 right-0 m-3 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                        <select onChange={handleFollowersChange} className="w-56 border rounded-lg border-gray-300 text-gray-600 h-10 pl-2 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                            <option value="All">All</option>
                            <option value="0-10000">0 - 10K</option>
                            <option value="10000-50000">10K - 50K</option>
                            <option value="50000-200000">50K - 200K</option>
                            <option value="200000-10000000">200K and above</option>


                        </select>
                    </div>
                </div>
                <div className='mt-5 '>
                    <label for="age" className=" block mb-4 text-sm font-medium text-gray-900 dark:text-white">Age</label>

                    <MultiRangeSlider
                        min={18}
                        max={100}
                        onChange={({ min, max }) => handleRangeChange(min, max)}

                    />
                </div>




            </div>
        </div>
    )
}

export default Filter