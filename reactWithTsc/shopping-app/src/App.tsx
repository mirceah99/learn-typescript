import React, { useState } from "react";
import "./App.css";
import ShoppingList from "./components/ShoppingList";
import ShoppingListForm from "./components/ShoppingListForm";
import Item from "./models/Item";
function App() {
	const [items, setItems] = useState<Item[]>([]);
	// [
	// 	{ id: 1, productName: "Lemon", quantity: 3 },
	// 	{ id: 2, productName: "Banana", quantity: 2 },
	// ]
	const addItem = function (productName: string, quantity: number) {
		console.log(` you want to add this item: ${productName}`);
		const newId = Math.floor(Math.random() * 10_000_000_000);
		setItems([
			...items,
			{ id: newId, productName: productName, quantity: quantity },
		]);
	};
	return (
		<div>
			<ShoppingList items={items} />
			<ShoppingListForm onAddItem={addItem}></ShoppingListForm>
		</div>
	);
}

export default App;
