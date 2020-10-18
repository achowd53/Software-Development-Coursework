# Team Hairy Owls(Ethan Shenker, Arib Chowdhury, Jonathan Lee)
# SoftDev
# K13 - - Template for Success
# 2020-10-15

from flask import Flask, render_template
from occupations import select, get_table

app = Flask(__name__)


@app.route("/")
def main():
    return render_template("tablified.html", title="Occupations", occ=select(), table=get_table())


if __name__ == "__main__":
    app.debug = True
    app.run()
