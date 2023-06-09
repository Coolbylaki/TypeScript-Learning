// const PENDING = 0
// const SHIPPED = 1
// const DELIVERED = 2

// if(status === DELIVERED){
//   // Something
// }

enum OrderStatus { // We can change default 0, 1, 2, 3
	PENDING = 10,
	SHIPPED, // So this is 11 now
	DELIVERED, // 12
	RETURNED = 94,
}

const deliveryStatus = OrderStatus.DELIVERED; // So this is 2 now

function isDelivered(status: OrderStatus) {
	return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.PENDING); // return false

enum ArrowKeys {
	UP = "up",
	DOWN = "down",
	LEFT = "left",
	RIGHT = "right",
	ERROR = 404,
}

ArrowKeys.LEFT; // Now this is left instead of number
