def inc(a)
  return ++a
end

max = -> (a, b) { a > b ? a : b }






max.call(5, 4) # => 10
puts "inc(5) = #{inc(5)}"
#puts "sum(1, 3) = #{sum(1, 3)}"
puts "max(8, 6) = #{max.call(8, 6)}"
