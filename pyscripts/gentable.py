
def readData(filename):
    with open(filename, "r") as f:
        data = f.read()
    return data


def processData(data):
    data = data.split("\n")
    ret = [[]]
    i = 0
    for book in data:
        if book == "#":
            ret.append([])
            i += 1
        else:
            ret[i].append(book)
    return ret


def createTableElements(processed, years):
    mostBooks = 0
    ret = ""
    for year in range(years):
        mostBooks = max(mostBooks, len(processed[year]))
    # print(mostBooks)
    for bookno in range(mostBooks):
        s = "<tr>\n"
        for year in range(years):
            if bookno >= len(processed[year]):
                continue
            s += "<td>" + processed[year][bookno] + "</td>\n"
        s += "</tr>\n"
        ret += s
    with open("output.txt", "w") as f:
        f.write(ret)


data = readData("books.txt")
ret = processData(data)
createTableElements(ret, 3)
