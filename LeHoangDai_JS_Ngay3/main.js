//Câu 1: Khai báo constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}
//Câu 2: Khởi tạo mảng products (ít nhất 6 sản phẩm, ≥ 2 danh mục)
const products = [
    new Product(1, "iPhone 15 Pro", 35000000, 10, "Phones", true),
    new Product(2, "Samsung Galaxy S24", 28000000, 5, "Phones", true),
    new Product(3, "MacBook Pro M3", 52000000, 3, "Laptops", true),
    new Product(4, "AirPods Pro", 6500000, 0, "Accessories", true),
    new Product(5, "Apple Watch Ultra", 22000000, 8, "Accessories", false),
    new Product(6, "Dell XPS 15", 42000000, 2, "Laptops", true)
];
//Câu 3: Tạo mảng mới chỉ chứa name, price
const nameAndPrice = products.map(p => ({
    name: p.name,
    price: p.price
}));

console.log(nameAndPrice);
//Câu 4: Lọc sản phẩm còn hàng trong kho (quantity > 0)
const inStockProducts = products.filter(p => p.quantity > 0);

console.log(inStockProducts);
//Câu 5: Kiểm tra có ít nhất 1 sản phẩm giá trên 30.000.000
const hasExpensiveProduct = products.some(p => p.price > 30000000);

console.log(hasExpensiveProduct);
//Câu 6: Kiểm tra tất cả sản phẩm danh mục "Accessories" có đang bán hay không
const allAccessoriesAvailable = products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable === true);

console.log(allAccessoriesAvailable);
//Câu 7: Tính tổng giá trị kho hàng
const totalInventoryValue = products.reduce(
    (total, p) => total + p.price * p.quantity,
    0
);

console.log(totalInventoryValue);
//Câu 8: Dùng for...of duyệt mảng và in ra
for (const p of products) {
    const status = p.isAvailable ? "Đang bán" : "Ngừng bán";
    console.log(`${p.name} - ${p.category} - ${status}`);
}
//Câu 9: Dùng for...in In ra tên thuộc tính và giá trị tương ứng
for (const key in products[0]) {
    console.log(key + ": " + products[0][key]);
}
//Câu 10: Lấy danh sách tên sản phẩm đang bán và còn hàng
const sellingAndInStockNames = products
    .filter(p => p.isAvailable === true && p.quantity > 0)
    .map(p => p.name);

console.log(sellingAndInStockNames);
