'''
Team AMA-Zing (Alvin Wu, Madelyn Mao, Arib Chowdhury
Softdev
K07 -- Divine your Destiny
2020--09--30

Our approach: We used Python File I/O to open the csv, then used rsplit to seperate out keys and values, shoved it in a dictionary, removed
Job Class and Total keys, then used choices from the random library to generate our output

'''

from random import choices

file = open("occupations.csv") #Opens file

Dict = {} #create a new dictionary

for line in file: #Splits into key, value using last comma
    key,value = line.strip().rsplit(',',1)
    Dict[key] = value
    
#Delete first and last lines
Dict.pop("Job Class")
Dict.pop("Total")

def returnRandomByWeight(dictionary):
    population = list(Dict.keys()) #The things we can randomize from
    weights = [float(x) for x in list(Dict.values())] #The percent chances of each thing
    return choices(population, weights, k=1)[0] #Uses choices from Random library for output

file.close() #Closes file
