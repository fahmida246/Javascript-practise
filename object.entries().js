let tr = Object.entries(car);
console.log(tr); // tr er result check
let conver = tr.map((item)=>
{
    let [a, b] = item;
    return a;
});
console.log(conver);  // conver er result check

//output
//[
//  [ 'id', 101 ],
//  [ 'title', 'iphone 12' ],
//  [ 'description', 'brilliant phone with 4k camera' ],
//  ['price', 549 ],
//  [ 'rating', 4.69 ],
//  [ 'brand', 'Apple' ],
 // [ 'discountpercentage', 20 ]
//]  tr er output
//
//[
 // 'id',
 // 'title',
 // 'description',
 // 'price',
 // 'rating',
 // 'brand',
 // 'discountpercentage'
// ] conver er output
