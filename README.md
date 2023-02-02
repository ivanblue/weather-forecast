# Weather Forecast for UpStart13

**Weather Forecast** is a [React](https://reactjs.org/) challenge application develop for [UpStart13](https://upstart13.com/). It connects to the [US Census Geocoding API](https://geocoding.geo.census.gov/geocoder/Geocoding_Services_API.pdf) to get the latitude,longitude of an specific address and then connects to the [US National Weather Service API](https://www.weather.gov/documentation/services-web-api) to get the weather forecast for the following days.

## Installation

We're using [ViteJs](https://vitejs.dev/) for project scaffolding:

```bash
npm create vite@latest
```

Using [TailwindCSS](https://tailwindcss.com/) for styling:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

tailwind.config.cjs

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

index.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Usage

```bash
npm install
npm run dev
```

**Observation:** Used the Chrome extension called [CORS Unblock](https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?hl=en) to deal with CORS errors calling API from the frontend.

### Example adddress

- 520 South Fairmont Way, Orange, California
- 20 W 34th St., New York, NY 10001
- 3601 Lyon St, San Francisco, CA 94123
- 12601 State St, Atlanta, MI 49709
- 6929 Airport Blvd 110, Austin, TX 78752

### SVG Weather icons

[https://github.com/Makin-Things/weather-icons](https://github.com/Makin-Things/weather-icons)
