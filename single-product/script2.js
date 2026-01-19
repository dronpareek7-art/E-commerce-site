   let wrapper = document.querySelector(".wrapper")

      const params = new URLSearchParams(window.location.search);
      const id = params.get("id");

      async function singleproduct() {
        try {
          const response = await fetch(
            `https://fakestoreapi.com/products/${id}`,
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
        const div = document.createElement("div");
        const cart = document.createElement("button");
        const buybtn = document.createElement("button");

        div.classList.add("box");

        cart.innerHTML = `Add to cart <span><i class="fa-solid fa-cart-shopping"></i></span>`;
        cart.classList.add("cart");

        buybtn.classList.add("buybtn");
        buybtn.innerHTML = `BUY NOW`;

        title.innerHTML = data.title;
        title.classList.add("title");

        price.innerHTML = "₹ " + data.price;
        price.classList.add("price");

        image.src = data.image;
        image.classList.add("image");

        // anchor.append(image);
        div.append(title,image, price, cart, buybtn);
        wrapper.append(div);
      }

      singleproduct();