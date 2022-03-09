require 'rest-client'

puts "Seeding data **************"

puts "Creating default profiles..."

user = User.create!(username: "Cristian", password: "coder123")
user2 = User.create!(username: "aaa", password: "aaaa")
user3 = User.create!(username: "bbb", password: "bbbb")

puts "Grabbing starter pokemon!"

pokemon1 = Pokemon.create!(
    name: "Bulbasaur", 
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    poke_type: 'GRASS',
    user_id: user.id
);
pokemon2 = Pokemon.create!(
    name: "Charmander", 
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", 
    poke_type: 'FIRE',
    user_id: user2.id
);
pokemon3 = Pokemon.create!(
    name: "Squirtle", 
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    poke_type: 'WATER',
    user_id: user3.id
);

puts "Adding moves....."

moves = RestClient.get'https://pokeapi.co/api/v2/move?offset=50&limit=100'
moveArray = JSON.parse(moves)["results"]
moveArray.each do |move|
    Move.create(name: move["name"])
end

puts "Adding types....."

types = RestClient.get'https://pokeapi.co/api/v2/type'
typeArray = JSON.parse(types)["results"]
typeArray.each do |type|
    Type.create(name: type["name"])
end

puts "Data seeded...."