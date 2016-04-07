def union(A,B):
    return [x for x in A]+[x for x in B if x not in A]

def intersection(A,B):
    return [x
            for x in A
            if x in B]

def set_dif(U,A):
    return [x
            for x in U
            if x not in A]

def sym_dif(U,A):
    return [x
            for x in U+A
            if (x in U and x not in A) or (x in A and x not in U)]

def cart_product(A,B):
    return [(x,y)
            for x in A
            for y in B
        ]

print union([1,2,3],[2,3,4])
print intersection([1,2,3],[2,3,4])
print set_dif([1,2,3],[2,3,4])
print sym_dif([1,2,3],[2,3,4])
print cart_product([1,2],['red','white'])
