var OrderStatus;
(function (OrderStatus) {
	OrderStatus[(OrderStatus["UNPAID"] = 0)] = "UNPAID";
	OrderStatus[(OrderStatus["PAID"] = 1)] = "PAID";
	OrderStatus[(OrderStatus["DELIVERING"] = 12)] = "DELIVERING";
	OrderStatus[(OrderStatus["DELIVERED"] = 13)] = "DELIVERED";
})(OrderStatus || (OrderStatus = {}));
var myOrder = {
	id: 1,
	orderStatus: OrderStatus.UNPAID,
};
console.log(OrderStatus);
