"""
TASK: 
Write a closure with outer function named 'repeat'
 such that the function calls shown below will yield the outputs shown.

print r1(2) -> hellohello
print r2(2) -> goodbyegoodbye
print repeat('cool')(3) -> coolcoolcool
"""

def repeat(x):
    return lambda y: x*y

r1=repeat('hello')
r2=repeat('goodbye')
print r1(2)
print r2(2)
