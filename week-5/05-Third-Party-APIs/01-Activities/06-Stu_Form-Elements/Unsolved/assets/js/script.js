var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function getSubmission(e){
    e.preventDefault();
    var shoppingItem = $('#shopping-input');
    shoppingListEl.append(`<li>${shoppingItem.val()}</li>`)
    shoppingItem.val('');
}

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on('submit', getSubmission);