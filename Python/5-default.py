# Python way for default parameter values

def sum(a, b=2, c=3):
	return a + b + c

print(sum(1))
print(sum(1, 2))
print(sum(1, 2, 3))