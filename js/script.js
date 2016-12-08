(function(window){

  // Model
  var users = [
    { label: 'Lisa', gender: 'F', tmb: 'https://randomuser.me/api/portraits/women/37.jpg' },
    { label: 'Lorenzo', gender: 'M', tmb: 'https://randomuser.me/api/portraits/men/83.jpg' },
    { label: 'Silvia', gender: 'F', tmb: 'https://randomuser.me/api/portraits/women/57.jpg' },
  ]  
  
  var list = document.getElementById("simpleList");

  for (i in users){    
    
    var row = document.createElement('li');
    row.className = users[i].gender == 'F' ? "female" : "male"
    
    var img_elem = document.createElement('img');
    img_elem.src = users[i].tmb;
    img_elem.className = 'tmb';
    row.appendChild(img_elem);
 
    var label = users[i].label;
    row.appendChild(document.createTextNode(label));
    
    list.appendChild(row);
  }

})(window)