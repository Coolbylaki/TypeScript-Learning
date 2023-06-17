import ShoppingList from "./components/ShoppingList";

function App() {
	const items = [
		{
			id: 1,
			product: "Lemon",
			quantity: 3,
		},
		{
			id: 2,
			product: "Chicken breast",
			quantity: 2,
		},
	];

	return (
		<>
			<ShoppingList items={items} />
		</>
	);
}

export default App;
