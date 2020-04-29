quantity_price = 0;
number_of_item = 0;
function change_quantity(e) {
  console.log(e.id);
  
  
  quantity_price = e.id;
  
}
console.log(quantity_price);
const add = () => {
  number_of_item += 1;
  document.getElementById("result").innerHTML = number_of_item;
calculate();
};
  const sub = () => {

  if(number_of_item<=0)
  {
    number_of_item=0
  }
  else{
  number_of_item -= 1;
  document.getElementById("result").innerHTML = number_of_item;
  }
  calculate();

};

function calculate() {
  if (number_of_item >= 0 && change_quantity!=null)
    document.getElementById("payable_amt").innerHTML ="Rs "+
      Number(quantity_price) * number_of_item ;
  else if(change_quantity==null)
  {

  document.getElementById("payable_amt").innerHTML = "please select quantity";

  } 
  else if(number_of_item==null){
  document.getElementById("payable_amt").innerHTML = "please add some quantity";

  }
}

window.onscroll=()=>{
  if (window.scrollY >= 600) {
  document.querySelector(".img1").style.transform = "scale(1)";
  document.querySelector(".img2").style.transform = "scale(1)";
  document.querySelector(".img3").style.transform = "scale(1)";
  document.querySelector(".img4").style.transform = "scale(1)";
 
}
};

function change_image(e)
{
  document.getElementById("image_to_show").src=e.src;
}






