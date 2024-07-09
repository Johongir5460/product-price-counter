const products = [];

document
  .getElementById("productForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const amount = parseInt(document.getElementById("amount").value);
    const price = parseInt(document.getElementById("price").value);

    const product = { name, amount, price };
    products.push(product);

    alert("Mahsulot muvaffaqiyatli qo'shildi!");
    renderProducts();
  });

function renderProducts() {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  let totalCount = 0;
  let totalCost = 0;

  products.forEach((product, index) => {
    const li = document.createElement("li");
    li.textContent = `${product.name} - ${product.amount} dona - ${product.price} so'm`;
    productList.appendChild(li);

    totalCount += product.amount;
    totalCost += product.amount * product.price;
  });

  document.getElementById("productCount").textContent = products.length;
  document.getElementById("totalCost").textContent = totalCost;

  // First and last item special color
  if (productList.firstChild) {
    productList.firstChild.style.backgroundColor = "lightblue";
  }
  if (
    productList.lastChild &&
    productList.firstChild !== productList.lastChild
  ) {
    productList.lastChild.style.backgroundColor = "lightgreen";
  }
}
