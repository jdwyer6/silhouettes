import { Row } from 'reactstrap';

const Thumbnails = ({thumbnails, handleClick, classIdentifier, bgTag }) => {
    

    

    const bgResult = thumbnails.filter(function(img) {
        if(bgTag === 'All'){
            return img;
        }else if(bgTag !== 'All'){
            return (img.tag === bgTag);
        }
    })




    return ( 
        <Row className='m-0'>

            {bgResult.map((img) => {
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