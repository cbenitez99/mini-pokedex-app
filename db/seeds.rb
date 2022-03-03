puts "Seeding data **************"
puts "Creating default profiles..."

user = User.create!(username: "Cristian", password: "coder123")
user2 = User.create!(username: "aaa", password: "aaaa")
user3 = User.create!(username: "bbb", password: "bbbb")

puts "Creating Party.."

party1 = PokemonParty.create(name: "Team Grass", party_count: 3 , user_id: user.id)
party2 = PokemonParty.create(name: "Team Water", party_count: 3 , user_id: user2.id)
party3 = PokemonParty.create(name: "Team Fire", party_count: 3 , user_id: user3.id)

puts "Grabbing starter pokemon!"

pokemon1 = Pokemon.create(
    name: "Bulbasaur", 
    types: "Grass", 
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", 
    moves: "Solar-Beam",
    stats: "",
    pokemon_party_id: party1.id,
    user_id: user.id
);
pokemon2 = Pokemon.create(
    name: "Charmander", 
    types: "Fire", 
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", 
    moves: "Flamethrower",
    stats: "",
    pokemon_party_id: party2.id,
    user_id: user2.id
);
pokemon3 = Pokemon.create(
    name: "Squirtle", 
    types: "Water", 
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", 
    moves: "Hydropump",
    stats: "",
    pokemon_party_id: party3.id,
    user_id: user3.id
);

puts "Data seeded...."



