let data=JSON.parse(localStorage.getItem("purchase")) 
let cont=document.querySelector("#purchased_vouchers")
let display=(data)=>{
    cont.innerHTML=[]
    data.forEach((el)=>{
        console.log(el.image)
      let card=document.createElement("div")
      card.setAttribute("class","card")
      cont.append(card)
      let name=document.createElement("h4")
        name.innerText=el.name
        let image=document.createElement("img")
        image.setAttribute("src",el.image)
        let price=document.createElement("h4")
        price.innerText=el.price
        card.append(image,name,price)
  
    })
}
display(data)



