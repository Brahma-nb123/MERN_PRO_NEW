import React from 'react';
import MenuItem from './MenuItem';

const MenuList = ({ list = [] }) => {
  return (
    <div className="MenuList-container">
      <ul>
        {list && list.length
          ? list.map((listItem, index) => <MenuItem key={index} item={listItem} />)
          : null}
      </ul>
    </div>
  );
};

export default MenuList;
