import React from 'react';
import WeatherIcon from '../WeatherIcon';
import { extractIconName } from '../../utils';

type TodaySkyProps = {
  city: string;
  periods: any;
};

const TodaySky = ({ city, periods }: TodaySkyProps) => {
  // date formatting
  const currentDate = new Date();
  const day = currentDate.getDate();
  const monthName = currentDate.toLocaleDateString('en-us', { month: 'long' });
  const year = currentDate.getFullYear();
  const suffix = ['th', 'st', 'nd', 'rd'][(day % 100 > 3 && day % 100 < 21) || day % 10 > 3 ? 0 : day % 10];
  const formattedDate = `${monthName} ${day}${suffix}, ${year}`;

  // weather formatting
  const weatherSky = extractIconName(periods[0]?.icon, periods[0]?.shortForecast);
  const shortForecast = periods[0]?.shortForecast;

  return (
    <div className="col-span-8">
      <h1 className="text-white text-4xl font-light capitalize">{city.toLowerCase()}</h1>
      <h2 className="text-white text-md font-light">{formattedDate}</h2>
      <WeatherIcon weather={weatherSky} size="h-24" />
      <div className="text-white text-xl font-normal ml-5">{shortForecast}</div>
    </div>
  );
};

export default TodaySky;
