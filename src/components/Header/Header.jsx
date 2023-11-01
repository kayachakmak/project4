export default function Header({ condition, temperature }) {
  return (
    <header>
      <h4>
        {condition} {temperature} °C
      </h4>
    </header>
  );
}
