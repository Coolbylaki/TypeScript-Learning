import ShoppingList from "./components/ShoppingList";
import ShoppingListForm from "./components/ShoppingListForm";

import Item from "./models/item";

import { useState } from "react";

function App() {
	const [items, setItems] = useState<Item[]>([]);

	const addItem = (product: string) => {
		console.log("Made it to the app!", product);
	};

	return (
		<>
			<ShoppingList items={items} />
			<ShoppingListForm onAddItem={addItem} />
		</>
	);
}

export default App;
