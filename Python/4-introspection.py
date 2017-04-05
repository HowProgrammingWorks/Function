import inspect


def sum(a, b):
	return a + b


max = lambda x, y: x if x > y else y

print('Names:')
print('sum:', sum.__name__)
print('max:', max.__name__)

print('Arguments:')
print('sum:', inspect.getargspec(sum).args)
print('max:', inspect.getargspec(max).args)

print('Anonymous function: ' + (lambda x: x).__name__)

print('Function code:')
print('sum:', inspect.getsource(sum))
print('max:', inspect.getsource(max))