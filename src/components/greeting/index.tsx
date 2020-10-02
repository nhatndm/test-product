import React from 'react';

interface TProps {
  userName: string;
}

export const Greeting = ({ userName }: TProps) => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  let greeting = '';

  if (currentHour > 18) {
    greeting = 'Good evening';
  }

  if (currentHour < 18) {
    greeting = 'Good afternoon';
  }

  if (currentHour < 12) {
    greeting = 'Good morning';
  }

  return (
    <>
      {greeting}, <b>{userName}!!!</b>
    </>
  );
};
