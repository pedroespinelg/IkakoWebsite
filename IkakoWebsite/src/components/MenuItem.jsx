import ItemDisplay from "./ItemDisplay";

export default function MenuItem() {
  const menuItems = [
    {
      name: "Arepa",
      price: 14,
      available: true,
    },
    {
      name: "Empanadas",
      price: 7,
      available: false,
    },
    {
      name: "Smash Burger",
      price: 14,
      available: true,
    },
    {
      name: "Bao Buns",
      price: 10,
      available: true,
    },
  ];

  return (
    <ul>
      {menuItems.map((item) => (
        <ItemDisplay
          name={item.name}
          price={item.price}
          available={item.available}
        />
      ))}
    </ul>
  );
}
