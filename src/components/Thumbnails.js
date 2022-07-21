import { Row } from 'reactstrap';

const Thumbnails = (props) => {
    const thumbnails = props.thumbnails;
    const handleClick = props.handleClick;
    const classIdentifier = props.classIdentifier;

    return ( 
        <Row className='m-0'>
            {thumbnails.map((img) => {
                return(
                    <div key={img.id} id={img.id} onClick={(e) => handleClick(e)} className={`option-container d-flex align-items-center ${classIdentifier}`}>
                        <img className='option-container__image' src={img.image}></img>
                    </div>
                )

            })}
        </Row>
     );
}
 
export default Thumbnails;