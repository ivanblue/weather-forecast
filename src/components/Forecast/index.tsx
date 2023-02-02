import { extractIconName } from '../../utils';
import { ForecastItem } from '../../components';

type ForecastProps = {
  periods: any;
};

const Forecast = ({ periods }: ForecastProps) => {
  let forecastDays = periods
    .filter(function (e: any) {
      return e.number > 1 && e.name.toLowerCase().indexOf('night') === -1;
    })
    .slice(0, 6);

  return (
    <div className="col-span-12">
      <hr className="h-px mb-7 bg-white opacity-40" />

      <div className="grid grid-cols-12 py-4 bg-white bg-opacity-10 rounded-lg">
        {forecastDays.map((forecastDay: any) => (
          <ForecastItem
            key={forecastDay.name}
            name={forecastDay.name}
            iconName={extractIconName(forecastDay.icon, forecastDay.shortForecast)}
            temperature={forecastDay.temperature}
          />
        ))}
      </div>
    </div>
  );
};

export default Forecast;
