# Team Greedy Toads: Helena Williams, Arib Chowdhury, Benjamin Gallai, Anya Zorin, Marquee
# SoftDev
# K15: Sessions Greetings
# 2020-12-11 

#Used eshenkers code as reference for more efficient way to get inputs
#Used: https://flask.palletsprojects.com/en/1.1.x/quickstart/

#Hard Coded Username= toad, Password= mushroom

from flask import Flask, render_template, request, session
import random, os

app = Flask(__name__)    #create Flask object
app.secret_key= os.urandom(32) #Generates a random 32-byte key for the session

#Checks to see if toad is logged in, if toad is logged in it takes you to the welcome page, if not you go to login page
@app.route("/") #, methods=['GET', 'POST'])
def disp_loginpage():
    '''
    #print(request.args['username'])
    print("***DIAG: request.headers ***")
    print(request.headers)
    '''
    #If the username is in session (toad) go to welcome page
    if 'username' in session:
        return render_template('welcome.html', username=session['username'])
    return render_template('login.html')

#Checks if username and password are correct and throws an error message, if correct you are logged in, and creates session
@app.route("/auth") # , methods=['GET', 'POST'])
def authenticate():
    #Checks password and user, gives specific error messages when redirected to error page
    if request.args['username']!= 'toad' and request.args['password']!= 'mushroom':
        return render_template("error.html", errmsg='Wrong Username and Password')
    elif request.args['password']!= 'mushroom':
        return render_template("error.html", errmsg='Wrong Password')
    elif request.args['username']!= 'toad':
        return render_template("error.html", errmsg='Wrong Username')
    #Starts session for toad
    session['username']='toad'
    print(request.headers)
    #Renders the welcome template once logged in
    return render_template("welcome.html", username=request.args['username'])  

#Logs out user and ends session, sends back to login page
@app.route("/logout")
def logout():
    session.pop('username', None)
    return render_template('login.html')





    
if __name__ == "__main__": #false if this file imported as module
    #enable debugging, auto-restarting of server when this file is modified
    app.debug = True 
    app.run()