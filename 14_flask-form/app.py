# Team Greedy Toads: Helena Williams, Arib Chowdhury, Benjamin Gallai, Anya Zorin
# SoftDev
# K14: Form and Function
# 2020-12-08

from flask import Flask             #facilitate flask webserving
from flask import render_template   #facilitate jinja templating
from flask import request           #facilitate form submission

#the conventional way:
#from flask import Flask, render_template, request

app = Flask(__name__)    #create Flask object

#Starter Code
@app.route("/") #, methods=['GET', 'POST'])
def disp_loginpage():
    print("\n\n\n")
    print("***DIAG: this Flask obj ***")
    print(app)
    print("***DIAG: request obj ***")
    print(request)
    print("***DIAG: request.args ***")
    print(request.args)
    #print("***DIAG: request.args['username']  ***")
    #print(request.args['username'])
    print("***DIAG: request.headers ***")
    print(request.headers)
    return render_template( 'login.html' )

#Response rendering and form request using GET
@app.route("/auth") # , methods=['GET', 'POST'])
def authenticate():
    print("\n\n\n")
    print("***DIAG: this Flask obj ***")
    print(app)
    print("***DIAG: request obj ***")
    print(request)
    print("***DIAG: request.args ***")
    print(request.args)
    #print("***DIAG: request.args['username']  ***")
    #print(request.args['username'])
    print("***DIAG: request.headers ***")
    print(request.headers)
    #variable to store response in
    fullResp = ""
    #gets username and sends it using render templates and displays using jinja2
    #the three different responses are for Mario, Luigi, and any other username
    if(request.args.get("username")=="Mario"):
        fullResp+="Hello, Mario! Waaaa hooo HAAAH! This was a get request!"  #response to a form submission
        return render_template('response.html',response=fullResp,leResponsePage="la de daaaaaaaa")
    elif(request.args.get("username")=="Luigi"):
        fullResp+="GTFO LUIGI YOU DON'T GET TO KNOW THE REQUEST TYPE"
        return render_template('response.html',response=fullResp,leResponsePage="la de daaaaaaaa")
    else:
        fullResp+="you are "+request.args.get("username")+", not mario, go away. You were sent here through a get request."
        return render_template('response.html',response=fullResp,leResponsePage="sad not mario page")



if __name__ == "__main__": #false if this file imported as module
    #enable debugging, auto-restarting of server when this file is modified
    app.debug = True
    app.run()
