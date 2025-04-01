import React from "react";

function DigitalProduct({ data }) {
    return (
       
            <div className="shadow react_cards p-[30px] flex flex-col items-center">
                {data.image && <div className="logo_image"><img src={data.image} width="100" height="50" alt="Logo" /></div>}
                {data.count && <div className="count">{data.count}</div>}
                {data.text && <div className="text">{data.text}</div>}
            </div>
    );
}

export default DigitalProduct;
