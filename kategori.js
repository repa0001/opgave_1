fetch("https://kea-alt-del.dk/t7/api/categories?limit=30")
  .then((res) => res.json())
  .then(showCategories);

function showCategories(cats) {
  cats.forEach(showCategory);
  console.log("hvad fanden er cats: ", cats);
}

function showCategory(cat) {
  // fanger template

  const template = document.querySelector("template").content;
  // cloner
  const clone = template.cloneNode(true);

  // ændre indhold
  clone.querySelector("a").textContent = cat.category;
  clone.querySelector("a").href = `products.html?category=${cat.category}`;

  // appender

  document.querySelector("section.letterGroup ol").appendChild(clone);
}
