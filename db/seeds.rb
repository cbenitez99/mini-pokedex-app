require 'rest-client'
puts "Seeding data **************"
puts "Creating default profiles..."
user = User.create!(username: "Cristian", password: "coder123")
user2 = User.create!(username: "aaa", password: "aaaa")
user3 = User.create!(username: "bbb", password: "bbbb")
puts "Creating pokemon..."
pokemon1 = Pokemon.create!(
    name: "Pikachu", 
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    poke_type: 'ELECTRIC',
    user_id: user.id
);
puts "Adding Default Moves....."
moves = RestClient.get'https://pokeapi.co/api/v2/move?limit=4'
moveArray = JSON.parse(moves)["results"]
moveArray.each do |move|
    move_url = RestClient.get(move["url"])
    move_array = JSON.parse(move_url)
    Move.create!(name: move["name"], description: move_array["flavor_text_entries"][0]["flavor_text"].gsub!(/[^a-zA-Z0-9. -]/, ""), pokemon_id: pokemon1.id, user_id: user.id)
end

data = RestClient.get'https://pokeapi.co/api/v2/pokemon/25'
hp = JSON.parse(data)["stats"][0]
height = JSON.parse(data)["height"]
weight = JSON.parse(data)["weight"]
sprites = JSON.parse(data)["sprites"]
pokedex_number = JSON.parse(data)["id"]

Stat.create!(hp: hp["base_stat"], height: height, weight: weight, sprite: sprites["front_default"], pokedex_number: pokedex_number, pokemon_id: pokemon1.id, user_id: user.id)
byebug
puts "Data seeded...."