const products = [
  {id:1,name:"Bag",price:899,image:"bag.jpg",rating:4},
  {id:2,name:"Dress",price:1299,image:"dress.jpg",rating:5},
  {id:3,name:"Earphones",price:699,image:"earphones.jpg",rating:4},
  {id:4,name:"Grocery Pack",price:499,image:"grocery.jpg",rating:5},
  {id:5,name:"Laptop",price:45999,image:"laptop.jpg",rating:5},
  {id:6,name:"Mobile",price:14999,image:"mobile.jpg",rating:4},
  {id:7,name:"Perfume",price:999,image:"perfume.jpg",rating:4},
  {id:8,name:"Shampoo",price:299,image:"shampoo.jpg",rating:4},
  {id:9,name:"Shoes",price:1799,image:"shoes.jpg",rating:5},
  {id:10,name:"Watch",price:2499,image:"watch.jpg",rating:4}
];

const productList = document.getElementById("productList");

function display(list){
  productList.innerHTML="";
  list.forEach(p=>{
    productList.innerHTML+=`
      <div class="card">
        <img src="images/${p.image}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <p>${"⭐".repeat(p.rating)}</p>
        <button onclick='view(${JSON.stringify(p)})'>View</button>
        <button onclick='add(${JSON.stringify(p)})'>Add</button>
      </div>`;
  });
}
display(products);

function add(p){
  let cart=JSON.parse(localStorage.getItem("cart"))||[];
  let f=cart.find(i=>i.id===p.id);
  if(f)f.qty++;
  else cart.push({...p,qty:1});
  localStorage.setItem("cart",JSON.stringify(cart));
  updateCart();
}

function updateCart(){
  let cart=JSON.parse(localStorage.getItem("cart"))||[];
  let count=0;
  cart.forEach(i=>count+=i.qty);
  document.getElementById("cartCount").innerText=count;
}
updateCart();

function view(p){
  localStorage.setItem("selectedProduct",JSON.stringify(p));
  location.href="details.html";
}

function searchProduct(val){
  display(products.filter(p=>p.name.toLowerCase().includes(val.toLowerCase())));
}