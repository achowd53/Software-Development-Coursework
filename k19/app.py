# Team Cornwall Guppies (Michelle Thaung, Arib Chowdhury)
# SoftDev
# K19 -- A RESTful Journey Skyward
# 2021-04-05

from urllib.request import urlopen
from json import loads
from flask import Flask, render_template

app = Flask(__name__) #Load Flask App
with open("key_nasa.txt") as f: #Get API Key from file
    api_key = f.read()

@app.route('/')
def homepage():
    api_res = loads(urlopen('https://api.nasa.gov/planetary/apod?api_key='+api_key).read()) #Access URL, Get Content, and Load as Dict
    return render_template('main.html', image=api_res['url'], expl=api_res['explanation']) #Render image and Text with template
    
if __name__ == "__main__":
    app.run() #Run FlaskApp
