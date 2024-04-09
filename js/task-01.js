const numberOfCategories = document.querySelectorAll("li.item").length;
console.log(`Number of categories: ${numberOfCategories}`);

const categories = Array.from(document.querySelectorAll("ul#categories > li"))
categories.forEach(category => {
    const categoryName = category.querySelector("h2").innerText;
    const numberOfElement = category.querySelectorAll("li").length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${numberOfElement}`);
});