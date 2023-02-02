import clearIcon from '../../assets/icons/clear-day.svg';
import cloudyIcon from '../../assets/icons/cloudy.svg';
import partlyCloudyDayIcon from '../../assets/icons/cloudy-1-day.svg';
import rainyIcon from '../../assets/icons/rainy-3.svg';
import thunderStormIcon from '../../assets/icons/thunderstorms.svg';
import snowyIcon from '../../assets/icons/snowy-3.svg';
import windIcon from '../../assets/icons/wind.svg';

type WeatherIconProps = {
  weather: string;
  size: string;
  align?: string;
};

const WeatherIcon = ({ weather, size, align }: WeatherIconProps) => {
  let weatherIcon;

  switch (weather) {
    case 'sunny':
      weatherIcon = clearIcon;
      break;
    case 'partly-cloudy':
      weatherIcon = partlyCloudyDayIcon;
      break;
    case 'cloudy':
      weatherIcon = cloudyIcon;
      break;
    case 'rainy':
      weatherIcon = rainyIcon;
      break;
    case 'snowy':
      weatherIcon = snowyIcon;
      break;
    case 'thunderstorm':
      weatherIcon = thunderStormIcon;
      break;
    case 'wind':
      weatherIcon = windIcon;
      break;
    default:
      weatherIcon = clearIcon;
  }
  return <img src={weatherIcon} alt={weather} className={`${size} ${align}`} />;
};

export default WeatherIcon;
