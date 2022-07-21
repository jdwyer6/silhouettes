import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';
import { Row } from 'reactstrap';
import { useState } from 'react';

const FilterSelection = (props) => {
    const subject = props.subject;
    const setHuman = props.setHuman;
    const images = props.images;
    const label = props.label;
    const uniqueValues =['all',...new Set(images.map((item) => item.gender))]; 

    return ( 
        <Row className="my-3 m-0">
            <label className='p-0' htmlFor={subject}>{label}:</label>
            <select onChange={(e) => {setHuman({gender: e.target.value})}} name={subject} id={subject} className="form-select" aria-label={subject} defaultValue={'male'}>
                {uniqueValues.map((val) => {
                    console.log(val);
                    <option>{val}</option>
                })}
            </select>

        </Row>


     );
}
 
export default FilterSelection;