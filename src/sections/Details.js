import { useState } from "react";

const Details = () => {
    const [show, setShow] = useState(false)

    return ( 
        <>
            <h5>Description</h5>
            <p>A high quality, custom canvas featuring you and your pup silhouetted by a scenic backdrop.</p>
            <a onClick={()=>setShow(!show)} className='d-lg-none my-3'>{show ? '...show less' : '...show more'}</a>
            <div className={show ? 'd-inline' : 'hidden-on-medium'}>
                <h5>Product Info</h5>
                <p>Canvas is made with a high quality material. It is primed with zinc white and air-dried then a layer of titanium white is added before printing.</p>
                <h5>Key Features</h5>
                <ul>
                    <li>Arrives ready to hang</li>
                    <li>hand-crafted and expertly stretched</li>
                    <li>Only high quality ink is used</li>
                    <li>Available in different sizes</li>
                </ul>
                <h5>Size</h5>
                <p>20" x 20" (call for additional options)</p>
                <h5>Customization</h5>
                <p>Personalize your portrait for the perfect gift or home decoration</p>
            </div>

        </>
     );
}
 
export default Details;