import { Row } from 'reactstrap';
import { useState } from 'react';

const FilterSelection = (props) => {
    const subject = props.subject;
    const setFilterHuman = props.setFilterHuman;
    const images = props.images;
    const label = props.label;
    const uniqueValuesGender =['All',...new Set(images.map((item) => item[subject]))]; 
    // const uniqueValues2 =['All',...new Set(images.map((item) => item[subject2]))]; 
    const options = []
    // const options2 = []

        
    uniqueValues.map((val) => {
        options.push(<option key={val} value={val}>{val}</option>)
        
    })

    // uniqueValues2.map((val) => {
    //     options2.push(<option key={val} value={val}>{val}</option>)
        
    // })

    return ( 
        <Row className="my-3 m-0">
            <label className='px-1' htmlFor='gender'>Gender:</label>
            <select onChange={(e) => setFilterHuman({gender: e.target.value})} name={'gender'} id={'gender'} className="form-select" aria-label={'gender'}>
                {options1}
            </select>
            <label className='px-1' htmlFor='age'>Age: </label>
            <select onChange={(e) => setHumanFilter({age: e.target.value})} name={'age'} id={'age'} className="form-select" aria-label={'age'}>
                {options2}
            </select>
            <label className='px-1' htmlFor='bodyLanguage'>Body Language:</label>
            <select onChange={(e) => setHumanFilter({bodyLanguage: e.target.value})} name={'bodyLanguage'} id={'bodyLanguage'} className="form-select" aria-label={'bodyLanguage'}>
                {options1}
            </select>

        </Row>


     );
}
 
export default FilterSelection;











