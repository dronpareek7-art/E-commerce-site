let wrapper = document.querySelector(".wrapper");

async function getdata() {
  try {
    const response = await fetch(
      "https://fakestoreapiserver.reactbd.org/api/products",
    );
    const data = await response.json();
    console.log(data);
    showdata(data.data);
  } catch (error) {
    console.log(error);
  }
}
function showdata(data) {
  data.forEach((item) => {
    const title = document.createElement("h4");
    const price = document.createElement("h3");
    const image = document.createElement("img");
    const div = document.createElement("div");
    const cart = document.createElement("button");
    const buybtn = document.createElement("button");
    const anchor = document.createElement("a");

    anchor.href = `./single-product/index2.html?id=${item._id}`;

    div.classList.add("box");

    cart.innerHTML = `Add to cart <span><i class="fa-solid fa-cart-shopping"></i></span>`;
    cart.classList.add("cart");

    buybtn.classList.add("buybtn");
    buybtn.innerHTML = `BUY NOW`;

    title.innerHTML = item.title;
    title.classList.add("title");

    price.innerHTML = "₹ " + item.price;
    price.classList.add("price");

    image.src =item.images?.[0] || item.image || "https://via.placeholder.com/300";

    image.classList.add("image");

    anchor.append(image);
    div.append(title, anchor, price, cart, buybtn);
    wrapper.append(div);
  });
}

getdata();
