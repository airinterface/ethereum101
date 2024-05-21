// src/App.tsx
import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className={isActive ? 'active' : ''}
    >
      World...
    </div>
  );
};

export default App;
