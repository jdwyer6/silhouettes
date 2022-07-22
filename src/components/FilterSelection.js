import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';
import { Row } from 'reactstrap';
import { useState } from 'react';

const FilterSelection = (props) => {
    const subject = props.subject;
    const setHuman = props.setHuman;
    const images = props.images;
    const label = props.label;
    const uniqueValues =['All',...new Set(images.map((item) => item[subject]))]; 
    const options = []
        
    uniqueValues.map((val) => {
        options.push(<option key={val} value={val}>{val}</option>)
        
    })

    return ( 
        <Row className="my-3 m-0">
            <label className='px-1' htmlFor={subject}>{label}:</label>
            <select onChange={(e) => {setHuman({gender: e.target.value})}} name={subject} id={subject} className="form-select" aria-label={subject}>
                {options}
            </select>

        </Row>


     );
}
 
export default FilterSelection;