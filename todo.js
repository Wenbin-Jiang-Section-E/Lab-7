document.getElementById("addItem").addEventListener("click", function () {
  // Get the value of the text input
  let inputValue = document.getElementById("itemInput").value;

  // Create a new list item
  let newItem = document.createElement("li");

  // Add the text input value to the new list item
  newItem.textContent = inputValue;

  // Append the new list item to the list
  document.getElementById("itemList").appendChild(newItem);

  // Create a remove button for the new list item
  let removeButton = document.createElement("button");
  removeButton.textContent = "✅";

  removeButton.addEventListener("click", function () {
    newItem.remove();
  });
  // Append the remove button to the new list item
  newItem.appendChild(removeButton);

  // Clear the text input
  document.getElementById("itemInput").value = "";
});
