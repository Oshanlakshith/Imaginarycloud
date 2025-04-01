import React, { useEffect, useState } from "react";
import Background from "./assets/images/react_background.jpg";
import SecondNav from "./secoundNav";
import DigitalProduct from "./DigitalProduct";
import LogoImage from "./assets/images/logo_image.jpg";

function Home() {

   
    // Digital Products Array
    const products = [
        { image: LogoImage, count: "2013", text: "First Digital Product" },
        { image: LogoImage, count: "2024", text: "Third Digital Product" },
        { image: LogoImage, count: "2024", text: "Third Digital Product" },
        { image: LogoImage, count: "2024", text: "Third Digital Product" },
        { image: LogoImage, count: "2013", text: "First Digital Product" },
        { image: LogoImage, count: "2024", text: "Third Digital Product" },
        { image: LogoImage, count: "2024", text: "Third Digital Product" },
        { image: LogoImage, count: "2024", text: "Third Digital Product" }
    ];

    // useEffect(()=>{

    //     const fetchProducts = async () => {
    //                 // API call
    //     let response = await apiCall();

    //     setTestProducts(response)
    //     }

    //     fetchProducts()
    // },[])

    return (
        <section>
            <div className="bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${Background})` }}>
                <div className="custom_container_one">
                    <div className="grid grid-cols-1 gap-4 cus_padding md:grid-cols-3">
                        <div className="md:col-span-2">
                            <h1 className="text-3xl font-medium text-white md:text-5xl font-bold pb-[30px]">
                                EMPOWER YOUR CAREER IN DIGITAL INNOVATION
                            </h1>
                            <p className="mt-4 text-lg font-medium text-white">
                                A team dedicated to delivering high-quality software, tailored to meet unique business needs and accelerate digital transformation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Component */}
            <SecondNav />
            <div className="flex flex-col gap-8 sm:flex-col lg:grid lg:grid-cols-4 custom_container_three place-content-between cus_padding_70">
                {products.map((product, index) => (
                    <DigitalProduct key={index} data={product} />
                ))}
            </div>
        </section>
    );
}

export default Home;
