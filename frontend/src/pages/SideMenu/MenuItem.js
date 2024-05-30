

import React, { useState } from 'react';
import { SlControlPlay } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
// import { Link } from 'react-router-dom';


const MenuItem = ({ item }) => {
  const [displaycurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentLabel) {
    setDisplayCurrentChildren((prevState) => ({
      ...prevState,
      [getCurrentLabel]: !prevState[getCurrentLabel],
    }));
  }

  return (
    <li>
      <div className='px-2 font-bold py-1 hover:bg-red-500 hover:text-white flex justify-start a'>
        <p>{item.label}</p>
        {item.Children && item.Children.length > 0 && (
          <span className='p-2' onClick={() => handleToggleChildren(item.label)}>
            
            {displaycurrentChildren[item.label] ? <SlArrowDown /> 
 : <SlControlPlay />
}

          </span>
        )}
      </div>

      {item.Children && item.Children.length > 0 && displaycurrentChildren[item.label] && (
        <ul>
          {item.Children.map((child, index) => (
            <MenuItem key={index} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;
