import ReviewCard from '../components/ReviewCard';
import {FaStar} from 'react-icons/fa'

const Reviews = () => {
    return ( 
        <>
            <ReviewCard 
                title={'Vincent Van Gogh'} 
                message={'Absolutely incredible artwork. I love the background with the starry night.'}
            />
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

        </>
     );
}
 
export default Reviews;