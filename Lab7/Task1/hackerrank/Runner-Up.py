if __name__ == '__main__':
    n = int(input())
    arr = set(map(int, input().split()))
    m = max(arr)
    arr.remove(m)
    m = max(arr)
    print(m)
