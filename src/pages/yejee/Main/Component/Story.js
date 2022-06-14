import React from 'react';

const Story = props => {
  return (
    <div>
      <span className="stories">
        {props.img}
        <div>
          <p className="id">{props.id}</p>
          <p className="bottomText">{props.bottomText}</p>
        </div>
      </span>
    </div>
  );
};

export default Story;
