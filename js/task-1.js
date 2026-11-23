
const item = document.querySelectorAll("li.item");

console.log(`Number of categories: ${item.length} `);

item.forEach((item) => {
  const title = item.querySelector("h2");

  console.log(` Category: ${title.textContent}`);

  const itemUnder = item.querySelectorAll("li");
  console.log(`Elements: ${itemUnder.length}`);
});

