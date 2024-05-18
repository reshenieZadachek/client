import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../..';
import { ROOMS_ROUTE } from '../../utils/const';
import '../../App.css';

const ProgressBar = ({ level, text }) => {
  const [progressWidth, setProgressWidth] = useState(0);
  const { user } = useContext(Context)
  useEffect(() => {
    // Обновление ширины прогресса при изменении уровня
    if (level === 'Вы не вступили в комнату') {
        const progressBarWidth = 0 + '%';
        setProgressWidth(progressBarWidth);   
    }
    else{
        const progressBarWidth = (level/16)*100 + '%';
        setProgressWidth(progressBarWidth);
    }
    
  }, [level]);

  return (
    <Link to={level != 'Вы не вступили в комнату' && ROOMS_ROUTE}  className="progress-bar">
        <div className='swimTextBar'>
            {
                level === 'Вы не вступили в комнату'?
                level
                :
                text
            }
        </div>
      <div className="progress" style={{ width: progressWidth }}>
        
      </div>
      {
        level === 'Вы не вступили в комнату'?
        ''
        :
        <div className="progress-text-people">Человек в группе: {level}/16</div>
      }
      {
        level === 'Вы не вступили в комнату'?
        ''
        :
        <div className="progress-text-lvl">Уровень группы: {user.User.roomlvl}</div>
      }
    </Link>
  );
};

export default ProgressBar;