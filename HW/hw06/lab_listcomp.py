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


print [1 if x in LC_LETTERS]
