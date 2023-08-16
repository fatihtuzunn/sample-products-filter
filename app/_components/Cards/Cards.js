import { useState } from "react";
import Modal from "../Modal/Modal";
import Card from "../Card";

const Cards = ({ data }) => {
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState(null);


    const handleClick = (item) => {
        setShowModal(true)
        setModalData(item)
        console.log(item)
    }

    return (
        <div>

            <Modal setShowModal={setShowModal} showModal={showModal} modalData={modalData} />
            <div className="  flex flex-wrap">
                {data.map(item => (

                    <a onClick={() => handleClick(item)} className="h-full p-4 lg:w-1/3">
                        <Card item={item} />
                    </a>
                ))}


            </div>

        </div>
    );
};

export default Cards;
