def find_min(a, b, c, d):
    min = a
    min = b if b < min else min
    min = c if c < min else min
    min = d if d < min else min
    return  min

a, b, c, d = map(int, input().split())
print(find_min(a, b, c, d))