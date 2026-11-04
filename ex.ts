async function getStuff() {
  // usuarios, productos, ventas, compras

  const users = fetch("https://jsonplaceholder.typicode.com/users");
  const products = fetch("https://jsonplaceholder.typicode.com/products");
  const sales = fetch("https://jsonplaceholder.typicode.com/sales");
  const purchases = fetch("https://jsonplaceholder.typicode.com/purchases");

  const allResolvedRequests = await Promise.all([
    users,
    products,
    sales,
    purchases,
  ]);

  // pinto datos
}
