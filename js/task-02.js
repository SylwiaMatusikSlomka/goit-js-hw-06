const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];


let temp = [];
ingredients.forEach(ingredient => {
    let item = document.createElement("li");
    item.textContent = ingredient;
    item.classList.add("item");
    temp.push(item);
});

let list = document.querySelector("ul#ingredients");
list.append(...temp);