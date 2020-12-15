# Team Greedy Toads: Arib Chowdhury, Helena Williams, Benjamin Gallai, Anya Zorin
# SoftDev
# K16: No Trouble
# 2020-12-14

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O


DB_FILE="discobandit.db"

db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops -- you will use cursor to trigger db events

#==========================================================
def file(filename):
    file = csv.DictReader(open(filename))
    name = filename.split(".")[0]
    c.execute("CREATE TABLE "+name+"("+", ".join(file.fieldnames)+")\n")
    for row in file:
        VALUES = ", ".join(value if value.isnumeric() else '"'+value+'"' for value in row.values())
        c.execute("INSERT INTO "+name+" VALUES(%s);" % VALUES)
file("students.csv")
file("courses.csv")
# < < < INSERT YOUR TEAM'S POPULATE-THE-DB CODE HERE > > >
command = ""
c.execute(command)    # run SQL statement

#==========================================================

db.commit() #save changes
db.close()  #close database
