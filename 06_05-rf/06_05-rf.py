"""
Team AMA-Zing (Alvin Wu, Madelyn Mao, Arib Chowdhury
SoftDev
K06 -- Learnination Through Amalgamation
2020--09--30
"""

from random import choice

KREWES = {
    'orpheus': ['ERIC', 'SAUVE', 'JONATHAN', 'PAK', 'LIAM', 'WINNIE', 'KELLY', 'JEFFREY', 'KARL', 'ISHITA', 'VICTORIA', 'BENJAMIN', 'ARIB', 'AMELIA', 'CONSTANCE', 'IAN'],
    'rex': ['ANYA', 'DUB-Y', 'JESSICA', 'ALVIN', 'HELENA', 'MICHELLE', 'SHENKER', 'ARI', 'STELLA', 'RENEE', 'MADELYN', 'MAC', 'RYAN', 'DRAGOS'],
    'endymion': ['JASON', 'DEAN', 'MADDY', 'SAQIF', 'CINDY', 'YI LING', 'RUOSHUI', 'FB', 'MATTHEW', 'MAY', 'ERIN', 'MEIRU']
}

teamName = input("Choose a team (orpheus, rex, or endymion): ").lower()

while teamName not in KREWES: #Loops continously until user input matches a team name within the key list of KREWES
    teamName = input("Please Try Again! (orpheus, rex, or endymion): ").lower()

print(choice(KREWES[teamName])) #Prints random name in corresponding list for teamName in the dictionary
