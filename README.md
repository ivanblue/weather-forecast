# Weather Forecast for UpStart13

**Weather Forecast** is a [React](https://reactjs.org/) challenge project application. It connects to the [US Census Geocoding API](https://geocoding.geo.census.gov/geocoder/Geocoding_Services_API.pdf) to get the latitude,longitude of an specific address and then connects to the [US National Weather Service API](https://www.weather.gov/documentation/services-web-api) to get the weather forecast for the following days.

It also implements a proxy server using NodeJs with Express and Axios to bridge the CORS issue that show when querying the endpoints from the frontend.

## Installation

### Client

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

### Server

We're using NodeJs with express and Axios to run a proxy server to avoid CORS issues.

```bash
npm init
npm install express
npm install axios
```

## Usage

### Client

```bash
npm install
npm run dev
```

### Server

```bash
node index.js
```

## Example adddress

- 520 South Fairmont Way, Orange, California
- 20 W 34th St., New York, NY 10001
- 3601 Lyon St, San Francisco, CA 94123
- 12601 State St, Atlanta, MI 49709
- 6929 Airport Blvd 110, Austin, TX 78752

## SVG Weather icons

[https://github.com/Makin-Things/weather-icons](https://github.com/Makin-Things/weather-icons)
