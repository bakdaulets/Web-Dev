n =int(input())
A = list(map(int,input().split()))
b = A[0]
for i in range(1, n):
    if A[i] > 0 and  b > 0 or A[i] < 0 and b < 0:
        print("YES")
        break
    b = A[i]
else:
    print("NO")
