$("document").ready(()=>{

  $(".delete").click(()=>{
    var current = event.target;
    var currentId= $(current).attr("data-id");
    location.reload();
    $.ajax({
      url: "/link/" + currentId,
      method: 'DELETE'
    });
  });
});
