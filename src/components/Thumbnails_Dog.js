import { Row } from 'reactstrap';
import { useEffect } from 'react';


const Thumbnails = ({thumbnails, handleClick, classIdentifier, breed }) => {
    

    const dogResult = thumbnails.filter(function(img) {
        if(breed === 'All'){
            return img;
        }else if(breed !== 'All'){
            return (img.breed === breed);
        }
        
    })





    return ( 
        <Row className='m-0'>

            {dogResult.map((img) => {
                    return(
                        <div key={img.id} id={img.id} onClick={(e) => handleClick(e)} className={`d-flex align-items-center option-container ${classIdentifier}`}>                     
                            <img className='option-container__image' src={img.image}></img>
                        </div>
                    )
            })}
        </Row>
     );
}
 
export default Thumbnails;