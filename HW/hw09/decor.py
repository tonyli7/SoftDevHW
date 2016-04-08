import time

def f_time(fxn):
    start = time.time()
    t=0
    def func(arg):
        return str(fxn(arg))+": "+str(time.time()-start)
    
    return fxn

def func_info(fxn):

    def name(arg):
        return fxn.__name__
    return name

@func_info
@f_time  
def test(x):
    return x

hello=test(2)
print hello

"""
def make_bold(fn):
    return lambda : "<b>" + fn() + "</b>"

def make_italic(fn):
    return lambda : "<i>" + fn() + "</i>"

@make_bold
@make_italic
def hello():
    return "hello world"

helloHTML = hello()

print helloHTML
"""
