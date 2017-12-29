import React from 'react';

export const ListContainer = ({ children }) => {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">
        { children }
      </ul>
    </div>
  );
};
