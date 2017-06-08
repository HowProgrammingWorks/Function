#!/usr/bin/perl

sub square {
	return shift() ** 2;
}
sub cube {
	return shift() ** 3;
}
print 10 ** 2 . "\n";
print square(10) . "\n";

print 10 ** 3 . "\n";
print cube 10 . "\n"; # demonstrating that feature again
