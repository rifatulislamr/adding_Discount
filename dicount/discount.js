// function calculateDiscount() {
//     const selectedItemPrice = parseFloat(document.getElementById('itemSelect').value);
//     const itemQuantity = parseInt(document.getElementById('itemQuantity').value);
//     const numberOfItemsForDiscount = 4;
//     const discountedItemCount = Math.floor(itemQuantity / (numberOfItemsForDiscount + 1)); // Adding 1 to include the free item
//     const totalItemsCount = itemQuantity - discountedItemCount;

//     const totalPrice = totalItemsCount * selectedItemPrice;
//     const totalDiscount = selectedItemPrice * discountedItemCount;

//     document.getElementById('discountMessage').innerText = `You have purchased ${totalItemsCount} item(s) for $${totalPrice.toFixed(2)}. You get ${discountedItemCount} item(s) for free. Total discount: $${totalDiscount.toFixed(2)}. Total amount after discount: $${(totalPrice - totalDiscount).toFixed(2)}.`;
// }
