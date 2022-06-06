let form =document.querySelector("form")
form.addEventListener("submit",userdata)
let dataarr= JSON.parse(localStorage.getItem("user")) || []
function userdata(){
    event.preventDefault()
  class CreatData{
      constructor(name,email,address,wall){
          this.name=name
          this.email=email
          this.address=address
          this.wall=Number(wall)
      }
  }
  let name=form.name.value
  let email=form.email.value
  let address=form.address.value
  let wall=form.amount.value

  let data = new CreatData(name,email,address,wall)
  dataarr.push(data)
  localStorage.setItem("user",JSON.stringify(dataarr))


form.name.value=""
form.email.value=""
form.address.value=""
form.amount.value=""
 
}

function singupform(){
document.querySelector("form").style.display="contents"
}
