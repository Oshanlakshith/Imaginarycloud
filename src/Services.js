// SecondNav.js
import React from 'react';
import Background from "./assets/images/react_background.jpg";
import SecondNav  from "./secoundNav";
import DigitalProduct from "./DigitalProduct";

function Home() {
    return (
        <section>
            <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Background})` }}>

                <div className="custom_container_one">
                    <div className="cus_padding grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="md:col-span-2">
                            <h1 className="text-3xl font-medium text-white text-start md:text-5xl font-bold pb-[30px]">
                                EMPOWER YOUR CAREER IN DIGITAL INNOVATION
                            </h1>
                            <p className="mt-4 font-medium text-start text-lg text-white">
                                A team dedicated to delivering high-quality software, tailored to meet unique business needs and accelerate digital transformation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <SecondNav /> {/* Add the SecondNav component here */}
            <DigitalProduct/>
        </section>

    );
}

export default Home;
