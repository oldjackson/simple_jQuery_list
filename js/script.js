$(document).ready(function(){

  // Model
  var users = [
    { label: 'Lisa', gender: 'F', tmb: 'https://randomuser.me/api/portraits/women/37.jpg' },
    { label: 'Lorenzo', gender: 'M', tmb: 'https://randomuser.me/api/portraits/men/83.jpg' },
    { label: 'Silvia', gender: 'F', tmb: 'https://randomuser.me/api/portraits/women/57.jpg' },
  ]  

  var list = $("#simpleList");

  //for (var user of users){   
  users.forEach(
    function(user){
      var label = user.label;    
      var genderClass = user.gender == 'F' ? "female" : "male";

      var img_elem = $("<img></img>");
      img_elem.addClass("tmb");
      img_elem.attr("src", user.tmb);

      var row = $("<li></li>")   
                .addClass(genderClass)
                .append(img_elem)
                .append(label);

      list.append(row);
    }
  );

});