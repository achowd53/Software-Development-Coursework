# Team Hairy Owls(Ethan Shenker, Arib Chowdhury, Jonathan Lee)
# SoftDev
# K13 - - Template for Success
# 2020-10-15

from csv import DictReader
from random import choices as c


our_file = "data/occupations.csv"


def select() -> str:
    with open(our_file) as file:  # open the file
        reader = DictReader(file)

        jobs = []
        weights = []

        for row in reader:
            jobs.append(row["Job Class"])
            # casts each str into a float
            weights.append(float(row['Percentage']))

    file.close()

    return c(jobs[:-1], weights=weights[:-1])[0]


def get_table() -> dict:
    output = []
    with open(our_file) as file:
        reader = DictReader(file)

        for row in reader:
            output.append(dict(row))

    file.close()
    return output[:-1]


if __name__ == "__main__":
    print(select())
    print(get_table())
