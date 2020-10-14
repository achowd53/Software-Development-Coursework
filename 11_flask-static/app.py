#Team Kent Cockroaches (Ian Chen-adamczyk, William Yin, Arib Chowdhury)
#SoftDev
#K11 -- Some Things Never Change
#2020-10-14

# DEMO 
# basics of /static folder

from flask import Flask
app = Flask(__name__) 

@app.route("/")       
def hello_world():
    print("the __name__ of this module is... ")
    print(__name__)
    return "No hablo queso!"

if __name__ == "__main__":  # true if this file NOT imported
    app.debug = True        # enable auto-reload upon code change
    app.run()
