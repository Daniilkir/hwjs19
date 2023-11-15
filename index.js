const categories = document.querySelector("#categories");
const ul = categories.querySelectorAll("ul");

console.log(`У списку ${ul.length} категорії`);

let name = "Технології";
let li;

if (name === "Тварини") {
    li = ul[0].querySelectorAll("li");
} else if (name === "Продукти") {
    li = ul[1].querySelectorAll("li");
} else if (name === "Технології") {
    li = ul[2].querySelectorAll("li");
}

const h3 = document.createElement("h3");
h3.textContent = `${name} містить ${li.length} елементів`;
categories.before(h3);

// 2
const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
   ]

const ingredientsUl = document.querySelector("#ingredients")


ingredients.forEach(ingredient => {
    let li = document.createElement("li")
    li.textContent = ingredient
    ingredientsUl.append(li)
    console.log(li);
})
// 3
const images = [
    {
     url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'White and Black Long Fur Cat',
    },
    {
     url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
     url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'Group of Horses Running',
    },
   ];
   const gallery = document.querySelector("#gallery")
   const galleryImages = images.map(image => `
       <li>
           <img src="${image.url}" alt="${image.alt}" style="width: 270px;height: 300px;">
       </li>`)
   
   gallery.insertAdjacentHTML("beforeend", galleryImages)
// 4
let counterValue = document.querySelector("#value");
const btnDcr = document.querySelector("button[data-action=decrement]");
const btnIncr = document.querySelector("button[data-action=increment]");
let counter = 0;

btnDcr.addEventListener("click", decrement);
btnIncr.addEventListener("click", increment);

function decrement() {
    counter -= 1;
    counterValue.textContent = counter;
}

function increment() {
    counter += 1;
    counterValue.textContent = counter;
}

