class City:
	name = 'Kiev'
	year = 482

	def f1(self):
		return self.name

	f2 = lambda self: self.year


city = City()

print('city.f1():', city.f1())
print('city.f2():', city.f2())