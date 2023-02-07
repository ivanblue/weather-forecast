import WeatherIcon from '../../WeatherIcon';

type ForecastItemProps = {
  name: string;
  iconName: string;
  temperature: string;
};

const ForecastItem = ({ name, iconName, temperature }: ForecastItemProps) => {
  return (
    <div className="col-span-2 text-center">
      <h2 className="text-xl text-white font-light">{name}</h2>
      <WeatherIcon weather={iconName} size="h-12" align="mx-auto" />
      <h3 className="text-2xl text-white  font-light">{temperature}&deg;</h3>
    </div>
  );
};

export default ForecastItem;
