def xor(a, b):
    if (a != b):
        return 1
    return 0

a,b = map(int, input().split())
print(xor(a, b))