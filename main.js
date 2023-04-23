const fname = [];
const fquantity = [];
const fprice = [];
const ftotal=[];

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
    // alert(fquantity)
    // alert(fprice)
}
function place() {
    let a = prompt("Enter your table no. :-")
    document.getElementById("table").innerHTML=a;
    document.getElementById("bill").style.display="block";
    document.getElementById("item-page").style.display="none";
    document.getElementById("links").style.display="none";
    for (let i = 0; i < fname.length; i++) {
        ftotal[i]=fquantity[i]*fprice[i];
    }
    const t = (n1,n2)=>{
        return n1+n2;
    }
    let total = ftotal.reduce(t);
    document.getElementById("total").innerHTML=total;
    let table = document.getElementById("tab-bill");
    for (let i = 0; i < fname.length; i++) {
        let row = document.createElement("tr");
        let namec = document.createElement("td");
        namec.innerText=fname[i];
        let quanc = document.createElement("td");
        quanc.innerText=fquantity[i];
        let pricec = document.createElement("td");
        pricec.innerText=fprice[i];
        let totalc = document.createElement("td");
        totalc.innerText=fprice[i]*fquantity[i];
        row.appendChild(namec);
        row.appendChild(quanc);
        row.appendChild(pricec);
        row.appendChild(totalc);
        table.appendChild(row)
    }
}