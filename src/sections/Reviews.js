import {FaStar} from 'react-icons/fa'

const Reviews = () => {
    return ( 
        <>
            <div className="card" style={{width: '100%', margin: '1rem 0'}}>
                <div className="card-body">
                    <h5 className="card-title">Vincent Van Gogh</h5>
                    <div className="card-subtitle mb-2 text-muted">
                        <FaStar color='orange'/>
                        <FaStar color='orange'/>
                        <FaStar color='orange'/>
                        <FaStar color='orange'/>
                        <FaStar color='orange'/>
                    </div>
                    <p className="card-text">Absolutely incredible artwork. I love the background with the starry night.</p>
                </div>
            </div>
            <div className="card" style={{width: '100%', margin: '1rem 0'}}>
                <div className="card-body">
                    <h5 className="card-title">Andy Warhol</h5>
                    <div className="card-subtitle mb-2 text-muted">
                        <FaStar color='orange'/>
                        <FaStar color='orange'/>
                        <FaStar color='orange'/>
                        <FaStar color='orange'/>
                        <FaStar color='orange'/>
                    </div>
                    <p className="card-text">Great product. Great company! Is there any way to add a soup can to my image?</p>
                </div>
            </div>
            <div className="card" style={{width: '100%', margin: '1rem 0'}}>
                <div className="card-body">
                    <h5 className="card-title">Frida Kahlo</h5>
                    <div className="card-subtitle mb-2 text-muted">
                        <FaStar color='orange'/>
                        <FaStar color='orange'/>
                        <FaStar color='orange'/>
                        <FaStar color='orange'/>
                        <FaStar color='orange'/>
                    </div>
                    <p className="card-text">Pedí la pintura del atardecer y le puse la silueta de mi xoloitzcuintli. ¡Llegó ayer y a Diego y a mi nos encanta! ¡Cinco estrellas!</p>
                </div>
            </div>
            <div className="card" style={{width: '100%', margin: '1rem 0'}}>
                <div className="card-body">
                    <h5 className="card-title">Rembrandt</h5>
                    <div className="card-subtitle mb-2 text-muted">
                        <FaStar color='orange'/>
                        <FaStar color='orange'/>
                        <FaStar color='orange'/>
                        <FaStar color='orange'/>
                        <FaStar color='orange'/>
                    </div>
                    <p className="card-text">What a cool idea! I'm super happy with my purchase. I wish we had this technology in the 1600s!</p>
                </div>
            </div>
        </>
     );
}
 
export default Reviews;