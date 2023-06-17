import ShoppingList from "./components/ShoppingList";
import Item from "./models/item";
import { useState } from "react";

function App() {
	const [items, setItems] = useState<Item[]>([]);

	// {
	//   id: 1,
	//   product: "Lemon",
	//   quantity: 3,
	// },
	// {
	//   id: 2,
	//   product: "Chicken breast",
	//   quantity: 2,
	// },

	return (
		<>
			<ShoppingList items={items} />
		</>
	);
}

export default App;
