import { FormEvent, useRef } from "react";

interface ShoppingListFormProps {
	onAddItem: (product: string, quantity: number) => void;
}

const ShoppingListForm = ({ onAddItem }: ShoppingListFormProps): JSX.Element => {
	const productRef = useRef<HTMLInputElement>(null);
	const quantityRef = useRef<HTMLInputElement>(null);

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		if (productRef.current?.value && quantityRef.current?.value) {
			const product = productRef.current.value;
			const quantity = parseInt(quantityRef.current.value);

			onAddItem(product, quantity);

			productRef.current.value = "";
			quantityRef.current.value = "1";

			return;
		}
		alert("Please enter a valid product");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input ref={productRef} type="text" placeholder="Product Name" />
			<input type="number" min={1} ref={quantityRef} defaultValue={1} />
			<button type="submit">Add Item</button>
		</form>
	);
};

export default ShoppingListForm;
