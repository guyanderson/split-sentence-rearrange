$(function() {
  $("#formOne").submit(function(event) {
    var sentenceInput = $("#sentence").val();
    var sentenceArray = sentenceInput.split(' ');
    var newArray = [];
    sentenceArray.forEach(function (item) {
      if (item.length >= 3) {
        newArray.push(item);
      }
    })
    newArray.reverse().join();
    $(".output").text(newArray);

    event.preventDefault();
  });
});
