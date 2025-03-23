n =int(input())
A = list(map(int,input().split()))
count = 0
b = A[0]
for i in range(1, n):
    if A[i] > b:
        count += 1
    b = A[i]
print(count)