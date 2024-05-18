import React, { useState, useEffect } from 'react';

const SwimMes = ({ text }) => {
    const [isVisible, setIsVisible] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <>
        {isVisible && (
          <div className="popup visible">
            <div className="message_of_edits_elem">
                <p className="msg" style={{backgroundColor:'#20242d'}}>
                {text}
                </p>
            </div>
          </div>
        )}
      </>
    );
  };

export default SwimMes;