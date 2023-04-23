const fname = [];
const fquantity = [];
const fprice = [];

function add(name,quantity,price) {
    if (fname.length==0) {
        fname.push(name);
        fquantity.push(quantity);
        fprice.push(price);
    } else {
        if (fname.includes(name)) {
            let index = fname.indexOf(name);
            fquantity[index]+=quantity;
            // console.log(index);
            // let indexvalue = fquantity[index];
            // console.log(v);
            // let finalvalue = indexvalue+quantity;
            // console.log(finalvalue);
            // fquantity.splice(index,1,finalvalue)
            
        }
        else{
            fname.push(name);
            fquantity.push(quantity);
            fprice.push(price);
        }
    }
    // alert(fname)
    alert(fquantity)
    // alert(fprice)
}