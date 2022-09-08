import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';

function Drop({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="d-flex px-0">
      <Dropdown className='w-100' isOpen={dropdownOpen} toggle={toggle} direction={direction}>
            <DropdownToggle className='w-100' caret>Card Type</DropdownToggle>
            <DropdownMenu {...args}>
                <DropdownItem>Visa</DropdownItem>
                <DropdownItem>Mastercard</DropdownItem>
                <DropdownItem>Discover</DropdownItem>
                <DropdownItem>American Express</DropdownItem>
            </DropdownMenu>
      </Dropdown>
    </div>
  );
}

Drop.propTypes = {
  direction: PropTypes.string,
};

export default Drop;