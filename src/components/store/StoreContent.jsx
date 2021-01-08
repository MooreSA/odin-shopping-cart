import React from 'react';
import StoreItem from './StoreItem';
import itemInfo from './itemInfo';

const StoreContent = (props) => {
  const { section, updateCart } = props;
  const storeContent = itemInfo[section];

  return (
    <div className="section">
      {storeContent.map((item) => (
        <StoreItem itemInfo={item} key={item.Key} updateCart={updateCart} />
      ))}
    </div>
  );
};

export default StoreContent;
