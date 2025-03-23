a = int(input())
b = int(input())

count = 0
for c in str(a):
    if int(c) == b:
        count += 1

print(count)