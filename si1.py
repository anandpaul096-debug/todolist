def circulate(A,N):
  for i in range(1,N+1):
    B=A[i:]+A[:i]
    print("circulation",i,"=",B)
  return
A=[91,92,93,94,95]
N=int(input("enter n:"))
circulate(A,N)
      
