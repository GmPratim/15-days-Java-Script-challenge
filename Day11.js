// Chapter 11: Array methods
//
// Six tasks, one function each. Write each function in place of
// its throw line, then press Check. The menu and orders below
// are sample data you can try your functions on.

export const menu = [
  { name: 'Masala chai', price: 40, inStock: true },
  { name: 'Cutting chai', price: 25, inStock: true },
  { name: 'Bun maska', price: 35, inStock: false },
  { name: 'Parle-G', price: 10, inStock: true },
];

export const orders = [
  {
    id: 101, customer: 'Ravi', paid: true, delivered: true,
    items: [{ name: 'Masala chai', price: 40, qty: 2 }, { name: 'Bun maska', price: 35, qty: 1 }],
  },
  {
    id: 102, customer: 'Anjali', paid: false, delivered: true,
    items: [{ name: 'Cutting chai', price: 25, qty: 1 }],
  },
  {
    id: 103, customer: 'Ravi', paid: true, delivered: false,
    items: [{ name: 'Parle-G', price: 10, qty: 3 }],
  },
];

// Task 1: menu labels for what is in stock
//
// Return a new array with one label for every item that is in
// stock, written like 'Masala chai: ₹40' (the name, a colon and
// a space, then ₹ and the price). Leave out the items that are
// sold out and keep the menu order. Do not change the array you
// are given.
//
//   Export:   availableLabels(items)
//   Returns:  an array of strings
//   Example:  availableLabels(menu) gives
//             ['Masala chai: ₹40', 'Cutting chai: ₹25',
//              'Parle-G: ₹10']
//   Edge:     nothing in stock gives []
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function availableLabels(items) {
    return items
    .filter(item => item.inStock === true)
    .map(item => `${item.name}: ₹${item.price}`);
}

// Task 2: the total of one order
//
// Take one order and return its total in rupees: for every item
// in the order's items, its price times its qty, all added up.
//
//   Export:   orderTotal(order)
//   Returns:  a number
//   Example:  orderTotal(orders[0]) gives 115
//   Edge:     an order with no items gives 0
//
// Careful: an order with no items must give 0, not an error.
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function orderTotal(order) {
  return order.items.reduce((total, item) => {
    return total + item.price * item.qty;
  }, 0);
}

// Task 3: an order and its position
//
// Find the order whose id equals the id you are given. Return
// an object with two keys: order (the order itself, the same
// object that is in the list, not a copy) and position (its
// index in the list).
//
//   Export:   lookupOrder(list, id)
//   Returns:  { order, position }
//   Example:  lookupOrder(orders, 102) gives
//             { order: <the order with id 102>, position: 1 }
//   Edge:     no order with that id gives
//             { order: undefined, position: -1 }
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function lookupOrder(list, id) {
  const order = list.find(item => item.id === id);
  const position = list.findIndex(item => item.id === id);

  return { order, position };
}

// Task 4: anyone unpaid, everything delivered?
//
// Return an object with two true or false answers. anyUnpaid
// is true when at least one order is not paid. allDelivered is
// true when every order is delivered.
//
//   Export:   rushCheck(list)
//   Returns:  { anyUnpaid, allDelivered }
//   Example:  rushCheck(orders) gives
//             { anyUnpaid: true, allDelivered: false }
//   Edge:     no orders at all gives
//             { anyUnpaid: false, allDelivered: true }
//
// Careful: with no orders, nobody owes money and nothing is
// waiting to go out.
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function rushCheck(list) {
  const anyUnpaid = list.some(order => order.paid === false);
  const allDelivered = list.every(order => order.delivered === true);

  return { anyUnpaid, allDelivered };

}

// Task 5: one ticket per cup
//
// Return one flat array of tickets, one ticket per cup: the
// order's id, a colon and a space, then the item's name. An
// item with qty 2 makes two tickets. Keep the orders, and the
// items inside each order, in their original order. Do not
// change the list you are given.
//
//   Export:   kitchenTickets(list)
//   Returns:  an array of strings
//   Example:  kitchenTickets([orders[0]]) gives
//             ['101: Masala chai', '101: Masala chai',
//              '101: Bun maska']
//   Edge:     an order with no items makes no tickets, and an
//             empty list gives []
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function kitchenTickets(list) {
  return list.flatMap(order =>
    order.items.flatMap(item =>
      Array(item.qty).fill(`${order.id}: ${item.name}`)
    )
  );
}

// Task 6 (interview question): orders by customer with reduce
//
// Group the orders by customer name, using reduce. Return an
// object with one key per customer, in the order each customer
// first appears. Each key holds an array of that customer's
// orders (the same order objects, not copies), in their
// original order. Do not change the list you are given.
//
//   Export:   groupByCustomer(list)
//   Returns:  an object of arrays
//   Example:  groupByCustomer(orders) gives
//             { Ravi: [order 101, order 103],
//               Anjali: [order 102] }
//   Edge:     an empty list gives {}
//
// Careful: Object.groupBy is not allowed here (the check makes
// it throw). And every call starts from a fresh object, so a
// second call must not see the first call's orders.
//
// The interviewer will ask: what does reduce start from here,
// and what must each round return?
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function groupByCustomer(list) {
  return list.reduce((groups, order) => {
    if (!groups[order.customer]) {
      groups[order.customer] = [];
    }

    groups[order.customer].push(order);

    return groups;
  }, {});
}
