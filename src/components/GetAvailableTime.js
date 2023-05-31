import React from "react";
import Button from '@mui/material/Button'
const GetAvailableTime = ({date, handleOnClick}) => {
  const availableTime = ["16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"].map(time => ({time, isAvailable: Math.random() < 0.5}))
  return <div style={{background: "white", display: 'grid',  gridTemplateColumns: 'repeat(4,1fr)', gap: '30px'}}>{availableTime.map(time => (
    <Button onClick={() => handleOnClick(time.time)} disabled={!time.isAvailable}>{time.time}</Button>
  ))}</div>;
};

export default GetAvailableTime;
