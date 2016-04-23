// check off specific todos by clicking
$("li").on("click",function(){
  // if li if gray
  if(this.style.color === "gray"){
  // turn it black & no line-through
    $(this).css({
      color:"black",
      textDecoration: "none"
    });
  } else {
  // turn it gray
    $(this).css({
      color: "gray",
      textDecoration: "line-through",
    });
  }
  // $(this).toggleClass("completed")
});
