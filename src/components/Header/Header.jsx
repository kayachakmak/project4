import "./Header.css";

export default function Header({ condition, temperature, isGoodWeather }) {
  return (
    <header className="weather">
      <section className="weather__info">
        <p className="weather__info__condition">{condition}</p>
        <h3 className="weather__info__temperature">{temperature} °C</h3>
      </section>
      <p className="weather__statement">
        {isGoodWeather
          ? "The weather is awesome! Go outside and: "
          : "Bad weather outside! Here's what you can do now: "}
      </p>
    </header>
  );
}
