import React, { useState } from 'react';

const App = () => {
  const [drivingHours, setDrivingHours] = useState(0);
  const [restHours, setRestHours] = useState(0);

  const addDrivingHour = () => {
    setDrivingHours(drivingHours + 1);
    checkCompliance();
  };

  const addRestHour = () => {
    setRestHours(restHours + 1);
    checkCompliance();
  };

  const checkCompliance = () => {
    if (drivingHours >= 11) {
      alert('You have reached the maximum driving hours. Take a break!');
    }
    if (restHours <= 1) {
      alert('You need more rest hours for compliance.');
    }
  };

  return (
    <div>
      <h1>Hours of Service Compliance Helper</h1>
      <p>Driving Hours: {drivingHours}</p>
      <button onClick={addDrivingHour}>Add Driving Hour</button>
      <p>Rest Hours: {restHours}</p>
      <button onClick={addRestHour}>Add Rest Hour</button>
    </div>
  );
};

export default App;