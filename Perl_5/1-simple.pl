#!/usr/bin/perl

use strict;

sub inc1 {
	return 1 + shift;
}
# everytime shift is called inside a function without array passed to shift operator
# it returns next argument
# note that shift is an operator, so it thinks of things next to it as of its arguments

sub inc2 {
	return @_[0] + 1;
}
# @_ is an array of arguments. Dont do $var = _@;
# because context of this operation is scalar
# and any array in scalar context represents its length.
# Not talking about context here.
# also note that @_ is immutable

sub inc3 {
	my $arg = shift;
	$arg++;
}
# perl functions always return value.
# Explicitly via return or implicitly last calculated value.
# Thus, its better to use return.
# note that $arg++ in perl is actually computed after return
# so mind using prefix in such operations

sub sum($$) {
	my ($a, $b) = (shift, shift);
	return $a + $b;
}
# we declare what do we wait on input, an then do
# fancy argument retrieval
# really the right way of doing this

my $max = sub {
	my ($a, $b) = @_;
	return $a > $b ? $a : $b;
};
# A lambda function! Also, note how we get args

print inc1(2); # returns 3
print inc2(2); # returns 3
print inc3(2); # returns 2 (look in comments near function definition)
print sum(1, 2); # returns 3
#print sum(1, 2, 3); # produces an error. Uncomment and try it!
print $max->(8, 10); # returns 10, note how we make function call
