let wrapper = document.querySelector(".wrapper");

const params = new URLSearchParams(window.location.search);
// console.log(params);
// for (const p of params) {
//   console.log(p);
// }
const id = params.get("id");

async function singleproduct() {
  try {
    const response = await fetch(
      `https://fakestoreapiserver.reactbd.org/api/products/${id}`,
    );
    const data = await response.json();
    console.log(data);
    showdata(data);
  } catch (error) {
    console.log(error);
  }
}
function showdata(data) {
  const title = document.createElement("h4");
  const price = document.createElement("h3");
  const image = document.createElement("img");
  const description = document.createElement("p");
  const div = document.createElement("div");
  const content = document.createElement("div"); //image and description
  const actionbtn = document.createElement("div"); //price and buttons
  const cart = document.createElement("button");
  const buybtn = document.createElement("button");

  div.classList.add("box");
  content.classList.add("content");
  actionbtn.classList.add("actions");

  title.innerHTML = data.title;
  title.classList.add("title");

  description.innerHTML = data.description;

  image.src = data.image;
  image.classList.add("image");

  content.append(image, description);

  cart.innerHTML = `Add to cart <span><i class="fa-solid fa-cart-shopping"></i></span>`;
  cart.classList.add("cart");

  buybtn.classList.add("buybtn");
  buybtn.innerHTML = `BUY NOW`;

  actionbtn.append(price, cart, buybtn);

  price.innerHTML = "₹ " + data.price;
  price.classList.add("price");

  div.append(title, content, actionbtn);
  wrapper.append(div);
}

singleproduct();
