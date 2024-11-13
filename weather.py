import os
from flask import Flask, request, jsonify, render_template #adds flask so we can host our webapp, also has templates of reuse of code and jsonify for javascript
import sqlite3 #imports the sqllite so the sql lite database can be accessed and used
from markupsafe import escape
from flask import abort, redirect, url_for
app = Flask(__name__)

def query_weather(location): 
  connection = sqlite3.connect('weather.db') #connects the database to flask
  cursor = connection.cursor() #cursor is used to retrieve data from database
  #below it uses the cursor to select from the table each of the columns created and notes the information in each
  cursor.execute("SELECT location, degrees, high, low, air, humidity, visibility, pressure, dew, wind FROM weather WHERE location=?", (location,)) 
  result = cursor.fetchone() #this is used to fetch 1 single row which is what is wanted since it shows 1 location at a time
  connection.close() #once it finishes grabbing the data it closes the connection with this to ensure good resource management and data integrity
  if result: 
    return {"location": result[0], "degrees": result[1], "high": result[2], "low": result[3], "air": result[4], 
           "humidity": result[5], "visibility": result[6], "pressure": result[7], "dew": result[8], "wind": result[9] 
             }
  else: 
    return None


@app.route('/')
def main():
  return render_template('index.html')

@app.route('/today')
def today():
  return render_template('today.html')

@app.route('/week')
def week():
  return render_template('week.html')

@app.route('/search', methods=['GET'])
def search(): 
  location = request.args.get('location') 
  weather_data = query_weather(location) 
  if weather_data:
    return  jsonify(weather_data) 
  else:  
    return jsonify({"error": "Location not found or not in database"})


if __name__ == '__main__':
  app.run(debug = True) 