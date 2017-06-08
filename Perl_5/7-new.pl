#!/usr/bin/perl

use strict;

# there is no new Function syntax in perl, but there is a fancy thing
# that is worth looking at

my $func = 'sub ttt($$) {($a, $b) = (shift, shift); return $a+$b;}';

my $res = (eval($func), ttt(1, 2));
print $res . "\n";

# fancy thing is that (, , , ) looks through all actions left to right and returns
# result of last
# Without braces it will go right to left
