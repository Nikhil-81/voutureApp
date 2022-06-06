// https://masai-vouchers-api.herokuapp.com/api/vouchers

// display amount
let dataarr= JSON.parse(localStorage.getItem("user")) || []
let useramount=document.querySelector("#wallet_balance")
useramount.innerText=(dataarr[0]["wall"])


// storing packages
let packagearr=JSON.parse(localStorage.getItem("purchase")) || []
let cont=document.querySelector("#voucher_list")
let vouturs=async ()=>{
    try{
        let url="https://masai-vouchers-api.herokuapp.com/api/vouchers"
        let res=await fetch(url)
        let raw=await res.json()
        let data=await raw["0"]["vouchers"]
        display(data)
    }
    catch(err){
        console.log(err)
    }
}
// async function vouturs(){
 
// }
vouturs()
let display=(data)=>{
    cont.innerHTML=[]
    data.forEach((el)=>{
        let card=document.createElement("div")
        card.setAttribute("class","voucher")
let name=document.createElement("h4")
name.innerText=el.name
let image=document.createElement("img")
image.setAttribute("src",el.image)
let price=document.createElement("h4")
price.innerText=el.price
let buy =document.createElement("button")
buy.innerText="BUY"
buy.setAttribute("class","buy_voucher")

buy.addEventListener("click",function(){
    checkbuy(el)
})
card.append(image,name,price,buy)
cont.append(card)

    })
}

let checkbuy=(el)=>{
   let product_price=el.price
   let wall_amount=useramount.innerText
   if(product_price>wall_amount){
       alert("Sorry! insufficient balance")
   }
   else{
       if(wall_amount==0){
        alert("Sorry! insufficient balance") 
       }
       else{
        wall_amount-=product_price
        alert("Hurray! purchase successful")
        useramount.innerText=wall_amount
        packagearr.push(el)
        localStorage.setItem("purchase",JSON.stringify(packagearr))
       }
  
   }
}