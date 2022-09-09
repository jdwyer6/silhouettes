import {FaStar} from 'react-icons/fa'

const ReviewCard = ({title, message}) => {
    return ( 
        <>
            <div className="card" style={{width: '100%', margin: '1rem 0'}}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <div className="card-subtitle mb-2 text-muted">
                        <FaStar color='orange'/>
                        <FaStar color='orange'/>
                        <FaStar color='orange'/>
                        <FaStar color='orange'/>
                        <FaStar color='orange'/>
                    </div>
                    <p className="card-text">{message}</p>
                </div>
            </div>
        </>
     );
}
 
export default ReviewCard;