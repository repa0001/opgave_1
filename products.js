const urlParams = new URLSearchParams(window.location.search);
const myCategory = urlParams.get("category");

const url = "https://kea-alt-del.dk/t7/api/products?category=" + myCategory;

fetch(url)
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  // Løb igennem hvert produkt og kald showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);

  // Få fat i template
  const template = document.querySelector("#smallProductTemplate");
  // Lav en kopi
  const copy = document.createElement("article");
  copy.innerHTML = template.innerHTML;

  // Ændre indhold

  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".subtle").textContent = product.subcategory;
  copy.querySelector(".price").textContent = `DKK ${product.price},-`;
  copy.querySelector(".discounted").innerHTML = `
  <p>Now DKK ${product.discount},-</p>
  <p>${product.discount}% off</p>
`;
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  if (product.soldout) {
    // Produkt er udsolgt
    copy.classList.add("soldOut");
  }

  copy.querySelector(".read_more").setAttribute("href", `produkt.html?id=${product.id}`);

  // Append
  document.querySelector("main").appendChild(copy);
}

/*
{
"id": 1165,
"gender": "Men",
"category": "Apparel",
"subcategory": "Topwear",
"articletype": "Tshirts",
"season": "Summer",
"productionyear": 2013,
"usagetype": "Sports",
"productdisplayname": "Mean Team India Cricket Jersey"
"price": 2495,
"discount": 45,
"brandname": "Nike",
"soldout": 0
}
*/

// fetch("https://kea-alt-del.dk/t7/api/products")
//   .then((response) => response.json())
//   .then(dataReceived);

// function dataReceived(data) {
//   // we have the data
//   console.log(data);
//   data.forEach(listoversigt);
// }

// function listoversigt(oneoversigt) {
//   console.log("listoversigt");
//   const oversigt = document.querySelector("template").content;
//   const myClone = oversigt.cloneNode(true);

//   myClone.querySelector(".articletype").textContent = oneoversigt.articletype;
//   myClone.querySelector(".gender").textContent = oneoversigt.gender;
//   myClone.querySelector(".price span").textContent = oneoversigt.price;
//   //   myClone.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

//   if (oneoversigt.hasSoldout) {
//     myClone.querySelector(".soldoutOrNot span").textContent = "yes";

//     myClone.querySelector(".soldoutOrNot span").textContent = "no";
//   }

//   // if (product.soldout) {
//   //     copy.querySelector("article").classList.add("soldOut");
//   // }

//   if (oneoversigt.hasSoldout) {
//     myClone.querySelector(".discountdOrNot span").textContent = "yes";

//     myClone.querySelector(".discountdOrNot span").textContent = "no";
//   }

//   myClone.querySelector("img").src = oneoversigt.img;

//   const parentElement = document.querySelector("main");
//   parentElement.appendChild(myClone);
// }
