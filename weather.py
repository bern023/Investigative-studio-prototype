import os
from flask import Flask,render_template
from markupsafe import escape
from flask import abort, redirect, url_for
app = Flask(__name__)

@app.route('/')
def main():
  return render_template('index.html')

@app.route('/today')
def today():
  return render_template('today.html')

@app.route('/week')
def week():
  return render_template('week.html')



if __name__ == '__main__':
  app.run(debug = True) 