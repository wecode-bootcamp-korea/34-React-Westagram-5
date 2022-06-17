import React from 'react';

const Story = ({ children, userName, bottomText }) => {
  return (
    <div>
      <span className="stories">
        {children}
        <div>
          <p className="id">{userName}</p>
          <p className="bottomText">{bottomText}</p>
        </div>
      </span>
    </div>
  );
};

export default Story;
