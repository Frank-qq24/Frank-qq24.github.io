// --------------------- articulacion de los tab en sobre mi ---------------------
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  //activar la barra del link
  event.currentTarget.classList.add("active-link");
  //activa el tab de elemento del link
  document.getElementById(tabname).classList.add("active-tab");
}
