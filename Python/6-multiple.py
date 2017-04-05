# Python way for multiple parameters
def str_sum(*args):
	return " ".join(args)


print(str_sum("Hello,", "World"))
print(str_sum("spam", "eggs", "and", "bacon"))

# Python way for multiple keyword arguments
def print_dict(**kwargs):
	for k, v in kwargs.items():
		print("%s: %s" % (k, v))

print_dict(first_name="John", last_name="Doe")