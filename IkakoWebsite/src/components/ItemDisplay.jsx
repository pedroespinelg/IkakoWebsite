export default function ItemDisplay({ name, price, available }) {
  return (
    <li key={name}>
      Name={name} Price={price} Available={available ? "Disponible" : "Agotado"}
    </li>
  );
}
