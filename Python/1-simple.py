# Function definition
def inc(a):
	return a + 1

# Function definition with lambda
max = lambda a, b: a if a > b else b


print('inc(5) =', inc(5))
print('max(8, 6) =', max(8, 6))