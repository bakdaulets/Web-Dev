def power(a, b):
    return a**b

a, b = map(float, input().split())
b = int(b)
print(power(a, b))