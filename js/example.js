// ADD NEW ITEM TO END OF LIST
var node_end = document.createElement("LI");
var textnode_end = document.createTextNode("cream");
node_end.appendChild(textnode_end);
document.getElementsByTagName("ul")[0].appendChild(node_end);

// ADD NEW ITEM START OF LIST
var node_start = document.createElement("LI");
var textnode_start = document.createTextNode("kale");
node_start.appendChild(textnode_start);

var list = document.getElementsByTagName("ul")[0];
list.insertBefore(node_start, list.childNodes[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var list_items = document.getElementsByTagName("li");
var i;
for (i = 0; i < list_items.length; i++) {
  list_items[i].classList.add("cool");
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var element = document.getElementsByTagName("h2")[0];
element.innerHTML += "<span>" + list_items.length + "</span>";
