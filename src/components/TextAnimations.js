import React from 'react';
import './styles.css';

const TextAnimation = () => {
  const depth = 1;
  const offset = 0.05;

  const textContent = 'MS';

  const spans = [];
  for (let i = 1; i <= depth; i++) {
    const spanStyle = {
      transform: `translateZ(${i * offset}px)`,
      color: '#f6a617' // Adjust color transparency
    };
    spans.push(<span key={i} style={spanStyle}>{textContent}</span>);
  }

  return (
    <div className="text-container">
      <div className="animated-text" id="text">
        <div className="text-content">MS{spans}</div>
      </div>
    </div>
  );
}

export default TextAnimation;