let tr = Object.entries(car);
console.log(tr);
let conver = tr.map((item)=>
{
    let [a, b] = item;
    return a;
});
console.log(conver);
