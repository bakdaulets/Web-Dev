n =int(input())
A = list(map(int,input().split()))
count = 0
for i in range(n):
    if A[i] > 0:
        count +=1

print(count)