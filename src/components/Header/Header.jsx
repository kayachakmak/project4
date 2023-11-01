export default function Header({ condition, temperature, isGoodWeather }) {
  return (
    <header className="weahter">
      <p className="weather__condition">{condition}</p>
      <h3 className="weather__temperature">{temperature} °C</h3>
      <p className="weather__statement">
        {isGoodWeather ? "Weather is good" : "Weather is shitty"}
      </p>
    </header>
  );
}
