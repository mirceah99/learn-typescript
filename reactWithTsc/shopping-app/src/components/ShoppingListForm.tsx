import React, { useRef } from "react";
import { OnAddItem } from "../App";
export interface ShoppingListFormProps {
	onAddItem: OnAddItem;
}

function ShoppingListForm({ onAddItem }: ShoppingListFormProps): JSX.Element {
	const inputRefName = useRef<HTMLInputElement>(null);
	const inputRefQuantity = useRef<HTMLInputElement>(null);
	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		onAddItem(inputRefName.current!.value, +inputRefQuantity.current!.value);
		inputRefName.current!.value = "";
		inputRefQuantity.current!.value = "";
	}
	return (
		<form onSubmit={handleSubmit}>
			<input ref={inputRefName} type="text" placeholder="Product name "></input>
			<input
				ref={inputRefQuantity}
				type="number"
				min="0"
				step="1"
				placeholder="Quantity"
			></input>
			<button type="submit">Add</button>
		</form>
	);
}
export default ShoppingListForm;
