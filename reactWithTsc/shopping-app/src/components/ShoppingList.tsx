import React from "react";
import Item from "../models/Item";

interface ShoppingListProps {
	items: Item[];
}
export default function ShoppingList({
	items,
}: ShoppingListProps): JSX.Element {
	return (
		<div>
			<h1>Shopping list</h1>
			<ul>
				{items.map((item) => (
					<li key={item.id}>
						{item.productName} - {item.quantity} pice
					</li>
				))}
			</ul>
		</div>
	);
}
