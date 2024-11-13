//Bw Today page
function openInfo(evt, tabName) {
  //declare the variables
  var i, tabcontent, tablinks;
  // get the elements and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for(i=0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // remove the 'active' class from elements
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active","")
  }
  //add active class to the clicked button 
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";

}