import React from 'react';

interface Props {
  prop: string
};

const Title: React.FC<Props> = ({prop}) => {
    return (
      <div className="text-blue-300 font-bold text-3xl text-center my-5 ">
        {prop}
      </div>
    );
  }
  
export default Title;