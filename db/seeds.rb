require 'rest-client'
User.destroy_all
Pokemon.destroy_all
puts "Seeding data **************"


puts "Creating default profiles..."

user = User.create!(username: "Cristian", password: "coder123")
user2 = User.create!(username: "aaa", password: "aaaa")
user3 = User.create!(username: "bbb", password: "bbbb")

puts "Grabbing starter pokemon!"

pokemon1 = Pokemon.create(
    name: "Bulbasaur", 
    types: "Grass", 
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", 
    user_id: user.id
)
pokemon2 = Pokemon.create(
    name: "Charmander", 
    types: "Fire", 
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", 
    user_id: user2.id
)
pokemon3 = Pokemon.create(
    name: "Squirtle", 
    types: "Water", 
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", 
    user_id: user3.id
)
puts "Teaching starter pokemon moves!"

Move.create(name: "Grass Knot", pokemon_id: pokemon1.id)
Move.create(name: "Flame Wheel", pokemon_id: pokemon2.id)
Move.create(name: "Bubble", pokemon_id: pokemon3.id)


puts "Data seeded...."



