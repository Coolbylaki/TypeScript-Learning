import { FormEvent, useRef } from "react";

interface ShoppingListFormProps {
	onAddItem: (product: string) => void;
}

const ShoppingListForm = ({ onAddItem }: ShoppingListFormProps): JSX.Element => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		if (inputRef.current?.value) {
			const product = inputRef.current.value;
			onAddItem(product);
			return (inputRef.current.value = "");
		}
		throw new Error("Invalid Item!");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input ref={inputRef} type="text" placeholder="Product Name" />
			<button type="submit">Add Item</button>
		</form>
	);
};

export default ShoppingListForm;
