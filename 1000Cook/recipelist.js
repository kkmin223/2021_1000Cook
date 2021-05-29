var Recipe_items = new Array(30);
var list_status=0; //레시피 출력이 블럭인지 리스트인지 상태 체크
function block_func(){
  list_status=0;
  for(var j=0; j<Recipe_items.length;j++){
    document.getElementsByClassName('Recipe_item')[j].classList.replace('container','col-sm-3');
    document.getElementsByClassName('Recipe_item')[j].style.display="block";
    document.getElementsByClassName('Recipe_info')[j].style.width ="250px";
    document.getElementsByClassName('Recipe_img')[j].style.width ="250px";
    document.getElementsByClassName('Recipe_item')[j].style.margin ="15px 0px 15px 0px";
  }

}

function list_func(){
  list_status=1;
  for(var j=0; j<Recipe_items.length;j++){
    document.getElementsByClassName('Recipe_item')[j].classList.replace('col-sm-3','container');
    document.getElementsByClassName('Recipe_item')[j].style.display="inline-flex";
    document.getElementsByClassName('Recipe_info')[j].style.width ="100%";
    document.getElementsByClassName('Recipe_img')[j].style.width ="450px";
    document.getElementsByClassName('Recipe_item')[j].style.margin ="0px";
  }
}

function OnmouseinItem(elem){
   if(list_status==0){ //레시피가 블럭형태로 출력
     elem.style.zoom = 1.05;
   }
   else {

   }
}
function OnmouseoutItem(elem){
   if(list_status==0){ //레시피가 블럭형태로 출력
     elem.style.zoom=1.0;
   }
   else {

   }
}
