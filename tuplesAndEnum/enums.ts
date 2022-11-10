enum OrderStatus {
	UNPAID,
	PAID,
	DELIVERING = 12,
	DELIVERED,
}

let myOrder: { id: number; orderStatus: OrderStatus } = {
	id: 1,
	orderStatus: OrderStatus.UNPAID,
};
