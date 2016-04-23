// check off specific todos by clicking
$("li").on("click",function(){
  $(this).toggleClass("completed")
});

// click on x to delete todo
$("span").on("click", function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
});

// takes text input and creates new todo items
$("input[type='text']").on("keypress", function(event){
  // listens for the keypress of 13
  // which is the value the enter key
  if(event.which === 13){
    // puts value of user input into todoItem
    var todoItem = $(this).val();
  }
})
