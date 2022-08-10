import { Row } from 'reactstrap';
import { useEffect } from 'react';
import { HUMANIMAGELAYERS } from '../shared/HUMANIMAGELAYERS';

const Thumbnails = ({thumbnails, handleClick, classIdentifier, gender, age }) => {
    
    // useEffect(()=>{
    //     if(gender === 'All'){
    //         return;
    //     }
    //     const filtered = HUMANIMAGELAYERS.filter(img => img.gender == gender)
    //     console.log(filtered)
    // }, [gender])


    const result = thumbnails.filter(function(v) {
        if(gender === 'All' && age === 'All'){
            console.log('All and All')
            return (v.gender == 'Male' || v.gender == 'Female' || v.age == 'Elderly' || v.age == 'Adult');
        }else if(gender !== 'All' && age =='All'){
            console.log('not gender but age')
            return (v.gender == gender);
        }else if(gender === 'All' && age !== 'All'){
            return (v.age == age);
        }else if(gender !== 'All' && age !== 'All'){
            return (v.gender == gender && v.age == age)
        }
        
    })
      
    // let result = thumbnails
    // const filterGender = thumbnails.filter(img => img.gender !== gender)

    
    // if(gender !== 'All'){
        // result.forEach((item, index, arr) => {
        //     if(item.gender !== gender){
        //         arr.splice(index, 1)
        //     }
            
        // });
    //     result = thumbnails.filter(function(v) {
    //         return (v.gender == gender);
    //     })
    // }

    // if(age !== 'All'){
    //     result = thumbnails.filter(function(v) {
    //         return (v.age == age);
    //     })
    // }


    return ( 
        <Row className='m-0'>
            {/* {thumbnails.map((img) => {
                return(
                    <div key={img.id} id={img.id} onClick={(e) => handleClick(e)} className={`d-flex align-items-center option-container ${classIdentifier}`}>                        
                        <img className='option-container__image' src={img.image}></img>
                    </div>
                )
            })} */}

            {result.map((img) => {

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