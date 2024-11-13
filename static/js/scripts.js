
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