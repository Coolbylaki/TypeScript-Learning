import ShoppingList from "./components/ShoppingList";
import ShoppingListForm from "./components/ShoppingListForm";

import Item from "./models/item";
import { v4 as generateID } from "uuid";

import { useState } from "react";

function App() {
	const [items, setItems] = useState<Item[]>([]);

	const addItem = (product: string, quantity: number) => {
		setItems([
			...items,
			{
				id: generateID(),
				product,
				quantity,
			},
		]);
	};

	return (
		<>
			<ShoppingList items={items} />
			<ShoppingListForm onAddItem={addItem} />
		</>
	);
}

export default App;
