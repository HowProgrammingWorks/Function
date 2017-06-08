#!/usr/bin/perl

use strict;
use Data::Dumper;
# i take the responsibility to rename this chapter too
# because of naming conventions in perl


package city;
sub new {
	my $class = shift;
	my $self = {
		_name => shift,
		_year => shift
	};
	bless $self, $class;
	# bless tells perl that $self is an object of package (class) $class
	# that is passed to the constructor
	return $self;
}
sub name {
	my $self = shift;
	return $self->{_name};
}

package main;

my $kyiv = new city('Kyiv', 482);
print $kyiv->name() . "\n";
