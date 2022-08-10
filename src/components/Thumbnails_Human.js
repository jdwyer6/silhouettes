import { Row } from 'reactstrap';

const Thumbnails = ({thumbnails, handleClick, classIdentifier, gender, age }) => {
    


    const humanResult = thumbnails.filter(function(img) {
        if(gender === 'All' && age === 'All'){
            return img;
        }else if(gender !== 'All' && age =='All'){
            return (img.gender == gender);
        }else if(gender === 'All' && age !== 'All'){
            return (img.age == age);
        }else if(gender !== 'All' && age !== 'All'){
            return (img.gender == gender && img.age == age)
        }
    })






    return ( 
        <Row className='m-0'>

            {humanResult.map((img) => {
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