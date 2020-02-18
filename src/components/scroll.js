import React from 'react';

const scroll = ({ children }) => {
  return (
    <div style={{ overflow: 'scroll', height: '50em' }}>
      {children}
    </div>
  )
}

export default scroll;
