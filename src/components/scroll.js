import React from 'react';

const scroll = ({ children }) => {
  return (
    <div style={{ overflow: 'scroll', height: '500px' }}>
      {children}
    </div>
  )
}

export default scroll;
