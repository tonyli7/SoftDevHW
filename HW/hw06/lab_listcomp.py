import math
"""
YOUR TASK The First:
Write a function that uses list comprehension to return whether a password meets a minimum threshold: it contains a mixture of upper- and lowercase letters, and at least one number.


YOUR TASK The Second:
Write a function that uses list comprehension to return a password's strength rating. This function should return a low integer for a weak password and a higher integer for a stronger password. (Suggested scale: 1-10) 
Consider these criteria:
* mixture of upper- and lower-case
* inclusion of numerals
* inclusion of these non-alphanumeric chars: . ? ! & # , ; : - _ *
"""



p="myNoobPass1234"
UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
LC_LETTERS="abcdefghijklmnopqrstuvwxyz"
NUMS="0123456789"
SPECIAL=".?!&#,;:-_*"

def isMin(pwd):
    check=[1 if x in LC_LETTERS
           else 2 if x in UC_LETTERS
           else 3 if x in NUMS
           else 4
           for x in pwd]
    if 1 and 2 and 3 in check:
        return check
    return False

def ratePass(pwd):
    rating=1
    check=isMin(pwd)
    print check
    if check:
        if len(check)>=8:
            rating+=(len(check)*100)**(.5)
        if 4 in check:
            rating+=check.count(4)*2
        if rating >= 50:
            rating=50
        return rating
            
    return """
           must have:
           lower-case\n
           upper-case\n
           at least one number\n
           """
        
#range from 1 to 50
print ratePass(p)
print ratePass("hE1^^ds*(&*(")
