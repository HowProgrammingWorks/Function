#!/usr/bin/perl

use strict;
# in original repo this file is named "context"
# i take the responsibility to rename it to "scopes"
# because of two reasons:
# 1. context is name of entirely different principle
# 2. scope is just more logical :)


my @cities = ("Athens", "Roma", "London", "Beijing", "Kiev", "Riga");

my $f = sub {return scalar @_;};
# we pass an array to function, @_ represents it, and shift starts getting values from array.
# if we need to pass multiple arrays, or array and variable - we need to use references
# (not talking about them here)
# also, its nearly always better to use references, in terms of memory usage.

sub f2 {
	my @cities = ("Athens", "Roma");
	my $f = sub {return uc shift}; # uc stands for uppercase
	print @cities;
	print map($f->($_), @cities); # here we map by passing each element to function via $_
	print "\n";
	{
		my $f = sub {return lc shift};
		print @cities;
		print map $f->($_), @cities; # actually we can call any function with or without braces
		print "\n";
	}
	{
		my @cities = ("London", "Beijing", "Kiev");
		print @cities;
		print map $f->($_), @cities;
		print "\n";
	}
}

f2();

print @cities;
print $f->(@cities);
print "\n";
