class Obj:
	def inc(self, a):
		return a + 1

	max = lambda self, a, b: a if a > b else b


obj1 = Obj()

print('obj1.inc.__name__:', obj1.inc.__name__)
print('obj1.max.__name__:', obj1.max.__name__)

print('obj1.inc(3):', obj1.inc(3))
print('obj1.max(4,1):', obj1.max(4,1))