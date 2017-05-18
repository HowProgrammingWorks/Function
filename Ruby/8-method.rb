

word = 'boo'
word.define_singleton_method(:inc) do |a|
  return a = a + 1
end
puts word.inc(2) 
#word.singleton_methods(2) 
word.define_singleton_method(:sum) do |a, b|
  return a + b
end
puts word.sum(2, 1) 

word.define_singleton_method(:max) do |a, b| m =-> (a, b) { a > b ? a : b }
return m
end
puts word.max(2, 1) 
