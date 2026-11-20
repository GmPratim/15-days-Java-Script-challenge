// Chapter 5: Strings
//
// Six tasks, one function each. Write each function in place of
// its throw line, then press Check.

// Task 1: tidy a name however it was typed
//
// Remove the spaces at both ends, then return the name with its
// first letter in upper case and every other letter in lower
// case.
//
//   Export:   cleanName(raw)
//   Returns:  a string
//   Example:  cleanName('  aNJALI ') gives 'Anjali'
//             cleanName('MEERA') gives 'Meera'
//   Edge:     a tidy name like 'Kiran' comes back the same
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function cleanName(raw) {
  // throw new Error('Not implemented');
  let name = raw.trim()
  return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase()
}

// Task 2: a kitchen code like MAS-007
//
// Return the first three letters of the item in capitals, a
// dash, and the order number padded with zeros at the front to
// three digits.
//
//   Export:   orderCode(item, orderNumber)
//   Returns:  a string
//   Example:  orderCode('masala chai', 7) gives 'MAS-007'
//             orderCode('Cutting chai', 42) gives 'CUT-042'
//   Edge:     spaces before the item do not count, and three
//             digits need no padding:
//             orderCode(' bun maska', 142) gives 'BUN-142'
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function orderCode(item, orderNumber) {
  // throw new Error('Not implemented');
  let it = item.trim().slice(0,3).toUpperCase()
  let num = String(orderNumber).padStart(3, '0')
  return `${it}-${num}`

}

// Task 3: spot less sugar in any capitals
//
// Return true when the note contains the words less sugar, in
// any mix of upper and lower case and anywhere in the note, and
// false otherwise.
//
//   Export:   wantsLessSugar(note)
//   Returns:  true or false
//   Example:  wantsLessSugar('Less SUGAR please') gives true
//             wantsLessSugar('extra ginger') gives false
//   Edge:     'extra ginger, LESS SUGAR' gives true, and
//             'more sugar' gives false
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function wantsLessSugar(note) {
  // throw new Error('Not implemented');
  let newItem = note.toLowerCase()
  return newItem.includes('less sugar')
}

// Task 4: a web address slug for a menu item
//
// Return the item in lower case, with no spaces at either end
// and a dash in place of every space between words. Items have
// single spaces between their words.
//
//   Export:   slugify(item)
//   Returns:  a string
//   Example:  slugify(' Masala Chai Special ') gives
//             'masala-chai-special'
//   Edge:     a dash already there stays: slugify('parle-g')
//             gives 'parle-g'
//
// Careful: an item can have more than two spaces to swap, and
// every one of them must become a dash.
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function slugify(item) {
  // throw new Error('Not implemented');
  let newIt = item.trim().toLowerCase()
  return newIt.split(' ').join('-')
  
}

// Task 5: hide all but the last four digits
//
// phone is text. Return text of the same length in which every
// character except the last four is a star *, and the last four
// are the phone's own last four digits.
//
//   Export:   maskPhone(phone)
//   Returns:  a string
//   Example:  maskPhone('9876543210') gives '******3210'
//   Edge:     a phone of four digits has nothing to hide:
//             maskPhone('1234') gives '1234'
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function maskPhone(phone) {
  return '*'.repeat(phone.length - 4) + phone.slice(-4);
}

// Task 6 (interview question): reverse a string
//
// Return the same characters in reverse order.
//
//   Export:   reverseString(text)
//   Returns:  a string
//   Example:  reverseString('chai') gives 'iahc'
//   Edge:     one character comes back as it is, and empty
//             text '' gives ''
//
// The interviewer will ask: strings have no reverse method, so
// what do you turn the string into first?
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function reverseString(text) {
  return text.split('').reverse().join('');
}
