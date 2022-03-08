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
move1 = Move.create(
    name: "Razor-Leaf",
    pokemon_id: pokemon1.id,
    user_id: user.id
);

move2 = Move.create(
    name: "Flamethrower",
    pokemon_id: pokemon2.id,
    user_id: user2.id
);

move3 = Move.create(  
    name: "Water-Gun",
    pokemon_id: pokemon3.id,
    user_id: user3.id
);
puts "Adding types....."
type1 = Type.create(    
    name: "Grass", 
    pokemon_id: pokemon1.id,
    move_id: move1.id 
);

type2 = Type.create(
    name: "Fire", 
    pokemon_id: pokemon2.id,
    move_id: move2.id
);

type3 = Type.create(
    name: "Water", 
    pokemon_id: pokemon3.id,
    move_id: move3.id
);

puts "Data seeded...."