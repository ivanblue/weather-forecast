import { WeatherIcon } from '../../components';

type TodayTemperatureProps = {
  periods: any;
};

const TodayTemperature = ({ periods }: TodayTemperatureProps) => {
  const temperature = periods[0]?.temperature;
  const wind = `${periods[0]?.windSpeed}, ${periods[0]?.windDirection}`;

  return (
    <div className="col-span-4">
      <div className="text-center">
        <h1 className="text-white text-9xl font-light">{temperature}&deg;</h1>
        <h2 className="text-white text-lg font-light">
          Winds {wind} <WeatherIcon weather="wind" size="h-12" align="mx-auto" />
        </h2>
      </div>
    </div>
  );
};

export default TodayTemperature;
