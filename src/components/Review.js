const Review = ({img, text, name, pos}) => {
    return ( 
        <div style={{boxShadow: '3px 3px 5px rgba(0, 0, 0, .2)', borderRadius: '12px'}}>
            <div style={{width: '100%', height: '280px', overflow: 'hidden', borderRadius: '12px'}}>
                <img src={img} width='100%' style={{objectPosition: `0 ${pos}`}}/>
            </div>
            <div className='ps-3 pe-3'>
                <p>{text}</p>
                <p>{name}</p>
            </div>
            

        </div>
     );
}
 
export default Review;