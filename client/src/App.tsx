import { useEffect, useState } from 'react';

import { US_CENSUS_GEOCODING_API_URL, US_NATIONAL_WEATHER_API_URL, PROXY_URL } from './constants';

import { LoadingIcon } from './components';
import { Searchbar } from './components';
import { Forecast } from './components';
import { TodaySky } from './components/';
import { TodayTemperature } from './components';
import { ErrorMessage } from './components';

type coordinates = {
  x: number;
  y: number;
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [city, setCity] = useState<string>('San Francisco');
  const [addressCoordinates, setAddressCoordinates] = useState<coordinates>();
  const [weatherPeriods, setWeatherPeriods] = useState<any>(null);

  useEffect(() => {
    getWeatherForecast(addressCoordinates);
  }, [addressCoordinates]);

  return (
    <div className="max-w-3xl mx-auto mt-10 grid grid-cols-12 gap-6 bg-[url('./assets/background/skies-4.jpg')] bg-no-repeat bg-cover bg-bottom p-16 rounded-lg relative">
      <Searchbar onSearch={getCoordinatesByAddress} />

      {loading && <LoadingIcon />}
      {errorMessage && <ErrorMessage message={errorMessage} />}

      {weatherPeriods && (
        <>
          <TodaySky city={city} periods={weatherPeriods} />
          <TodayTemperature periods={weatherPeriods} />
          <Forecast periods={weatherPeriods} />
        </>
      )}
    </div>
  );

  // getting coordinates based on entered address
  async function getCoordinatesByAddress(search: string) {
    setLoading(true);

    if (search.length > 0) {
      return fetch(
        `${PROXY_URL}/${US_CENSUS_GEOCODING_API_URL}?address=${search}&benchmark=Public_AR_Current&vintage=Current_Current&format=json`
      )
        .then((res) => res.json())
        .then((res) => {
          setLoading(false);

          console.log(res.result.addressMatches);

          if (res.result.addressMatches.length > 0) {
            setErrorMessage('');
            setCity(res.result.addressMatches[0].addressComponents.city);
            setAddressCoordinates({
              x: res.result.addressMatches[0].coordinates.x,
              y: res.result.addressMatches[0].coordinates.y,
            });
          } else {
            setErrorMessage('Error: Address not found');
          }
        })
        .catch((err) => {
          setErrorMessage(`${err.name}: ${err.message}`);
          console.error(`${err.name}: ${err.message}`);
        });
    }
  }

  // getting grid coordinates with lat, long coordinates
  async function getWeatherForecast(xyCoords?: coordinates) {
    if (xyCoords?.x && xyCoords?.y) {
      setLoading(true);

      return fetch(`${US_NATIONAL_WEATHER_API_URL}/points/${xyCoords?.y},${xyCoords?.x}`)
        .then((res) => res.json())
        .then((res) => {
          const forecastURL = res.properties.forecast;

          // getting weather forecast based on grid coordinates
          return fetch(forecastURL)
            .then((res) => res.json())
            .then((res) => {
              setLoading(false);
              setWeatherPeriods(res.properties.periods);
            })
            .catch((err) => {
              setErrorMessage(`${err.name}: ${err.message}`);
              console.error(`${err.name}: ${err.message}`);
            });
        })
        .catch((err) => {
          setErrorMessage(`${err.name}: ${err.message}`);
          console.error(`${err.name}: ${err.message}`);
        });
    }
  }
};

export default App;
