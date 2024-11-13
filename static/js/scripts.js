
function grabWeather(event) { 
    event.preventDefault(); //This stops the page reloading
    var location = document.getElementById('location-input').value; 
    fetch('/search?location=' + location) 
    .then(response => response.json()) 
    .then(data => { 
        if (data.error) 
            { alert(data.error); 

        } else { 
            document.getElementById('title').textContent = data.location;
            document.getElementById('degrees').textContent = data.degrees + '°c'; 
            document.getElementById('high').textContent = 'High: ' + data.high + '°c';
            document.getElementById('low').textContent = 'Low: ' + data.low + '°c';  
            document.getElementById('humidity').textContent = data.humidity + '%'; 
            document.getElementById('wind').textContent = data.wind + ' km/h'; 
            document.getElementById('dew').textContent = data.dew + '°';
            document.getElementById('visibility').textContent = data.visibility + 'km';
            document.getElementById('pressure').textContent = data.pressure + ' mb';
            document.getElementById('air').textContent = data.air;
                   
        } 
    }) 
    .catch(error => console.error('Error:', error)); 
}
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
