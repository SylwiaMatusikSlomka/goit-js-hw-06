let counterValue = 0;
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

decrementButton.addEventListener("click", () => {
    counterValue--;
    value.textContent = counterValue.toString();
});

incrementButton.addEventListener("click", () => {
    counterValue++;
    value.textContent = counterValue.toString();
});