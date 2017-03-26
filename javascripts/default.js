function hideMenuItems() {
  var menuItems = document.getElementsByClassName("menu");

  for (item in menuItems) {
    item.style.display = "hidden";
  }
}

hideMenuItems();