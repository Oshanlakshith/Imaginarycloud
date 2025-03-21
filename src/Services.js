import Background from "./assets/images/react_background.jpg";

function Home() {
    return (
        <div style={{ backgroundImage: `url(${Background})` }}>
            <div className="custom_container_one">
                <div className="cus_padding grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                        <h1 className="text-3xl text-start md:text-5xl font-bold text-c p-[30px]">
                            EMPOWER YOUR CAREER IN DIGITAL INNOVATION
                        </h1>
                        <p className="mt-4 text-start text-lg text-gray-700">
                            A team dedicated to delivering high-quality software, tailored to meet unique business needs and accelerate digital transformation.
                        </p>
                    </div>
                    <div className="md:col-span-1">
                        <p className="text-lg text-gray-700">
                            A team dedicated to delivering high-quality software, tailored to meet unique business needs and accelerate digital transformation.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Home;