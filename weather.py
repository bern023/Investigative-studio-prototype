from flask import Flask
app = Flask(__name__)

@app.route('/')
def weather():
  return'weather app'

if __name__ == '__weather__':
  app.run() 