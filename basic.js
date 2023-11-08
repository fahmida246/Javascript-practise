console.log("Welcome to Programiz!");
let ofj = {
    name: 'hi obj',
    age: 23,
    arr1:[1,2,3],
    func: function (a,b) {
    return a+b;
    }
}
console.log(ofj.name);
console.log(ofj.age);
console.log(ofj.arr1[1]);
console.log(ofj.func(1,2));

///
const id = 101;
const title = "iphone 12";
const description = "brilliant phone with 4k camera";
const price = 549;
const rating = 4.69;
const brand = "Apple";
let discountpercentage = Number(prompt('enter number'));
function calculatefinalamount(price, discountpercentage){
    if (discountpercentage<0){
        console.log('not valid');
        return 0;
    }
    else{
        let discountamount = price* discountpercentage/100;
        return finalamount = price-discountamount;
    }
}
function details(id, title, description, price, rating, brand, discountpercentage ){
    console.log('id', id);
    console.log('title', title);
    console.log('description', description);
    console.log('price', price);
    console.log('rating', rating);
    console.log('brand', brand);
    console.log('discountpercentage', discountpercentage);
    console.log('finalamount', calculatefinalamount(price, discountpercentage));
}
details(id, title, description, price, rating, brand, discountpercentage );

let car = {
    id: 101,
    title: "iphone 12",
    description: "brilliant phone with 4k camera",
    price: 549,
    rating: 4.69,
    brand: "Apple",
    discountpercentage: 20,
}
console.log('break')
details(car.id, car.title, car.description, car.price, car.rating, car.brand, car.discountpercentage);

let dat = new Date();
console.log(dat.getFullYear());
console.log(dat.getMonth());
console.log(dat.getDate());

let tr = Object.entries(car);
console.log(tr);
let conver = tr.map((item)=>
{
    let [a, b] = item;
    return a;
});
console.log(conver);
