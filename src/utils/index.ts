export function extractIconName(icon: string, shortForecast: string) {
  let iconName = '';

  shortForecast = shortForecast.toLowerCase();

  if (icon.indexOf('sunny') > 0) iconName = 'sunny';
  if (icon.indexOf('rain') > 0) iconName = 'rainy';
  if (icon.indexOf('snow') > 0) iconName = 'snowy';
  if (icon.indexOf('cloudy') > 0) iconName = 'cloudy';
  if (icon.indexOf('wind') > 0) iconName = 'windy';
  if (icon.indexOf('storm') > 0) iconName = 'thunderstorm';

  if (iconName === '') {
    if (shortForecast.indexOf('sunny') >= 0) iconName = 'sunny';
    if (shortForecast.indexOf('rain') >= 0) iconName = 'rainy';
    if (shortForecast.indexOf('snow') >= 0) iconName = 'snowy';
    if (shortForecast.indexOf('cloudy') >= 0) iconName = 'cloudy';
    if (shortForecast.indexOf('wind') >= 0) iconName = 'windy';
    if (shortForecast.indexOf('storm') >= 0) iconName = 'thunderstorm';
    if (shortForecast.indexOf('partly sunny') >= 0) iconName = 'partly-cloudy';
    if (shortForecast.indexOf('partly cloudy') >= 0) iconName = 'partly-cloudy';
    if (shortForecast.indexOf('mostly clear') >= 0) iconName = 'sunny';
  }

  return iconName;
}
