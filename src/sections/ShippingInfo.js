import { useState } from "react";

const ShippingInfo = () => {
    const [show, setShow] = useState(false)
    return ( 
        <>
            <h5>Standard Shipping</h5>
            <p>Standard shipping is always free within the United States</p>
            <a onClick={()=>setShow(!show)} className='d-lg-none my-3'>{show ? '...show less' : '...show more'}</a>
            <div className={show ? 'd-inline' : 'hidden-on-medium'}>
                <h5>International Shipping</h5>
                <p>A charge of $10.60 is added for products shipped to the following locations</p>
                <ul>
                    <li>Canada</li>
                    <li>Mexico</li>
                </ul>
                <p>A charge of $12.46 is added for shipping to any other country</p>
                <h5>Express Delivery</h5>
                <p>$16.20 within the US and $20.65 outside the US</p>
            </div>
        </>

     );
}
 
export default ShippingInfo;