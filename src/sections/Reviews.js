import ReviewCard from '../components/ReviewCard';
import {FaStar} from 'react-icons/fa'
import { useState } from "react";

const Reviews = () => {
    const [show, setShow] = useState(false)
    return ( 
        <>
            <ReviewCard 
                title={'Vincent Van Gogh'} 
                message={'Absolutely incredible artwork. I love the background with the starry night.'}
            />
            <a onClick={()=>setShow(!show)} className='d-lg-none my-3'>{show ? '...show less' : '...show more'}</a>
            <div className={show ? 'd-inline' : 'hidden-on-medium'}>
                <ReviewCard
                    title={'Andy Warhol'}
                    message={'Great product. Great company! Is there any way to add a soup can to my image?'}
                />
                <ReviewCard
                    title={'Frida Kahlo'}
                    message={'Quería pedir algo con mi propia cara pero no había nada así entonces pedí la pintura del atardecer y le puse la silueta de mi xoloitzcuintli. ¡Llegó ayer y a Diego y a mi nos encanta! ¡Cinco estrellas!'}
                />
                <ReviewCard
                    title={'Rembrandt'}
                    message={"What a cool idea! I'm super happy with my purchase. I wish we had this technology in the 1600s!"}
                />
            </div>
        </>
     );
}
 
export default Reviews;