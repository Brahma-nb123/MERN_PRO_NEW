import React from 'react';
import menus from './Data';
import MenuList from './MenuList';

const Index = () => {
  return (
    <div className="TreeViewContainer">
      <h1>This is for side menu...</h1>
      <MenuList list={menus} />
    </div>
  );
};

export default Index;
