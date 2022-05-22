# require 'rest-client'
# puts "************--Beginning Pokemon Adventure--************"
# user = User.create!(username: "Cristian", password: "coder123")
# puts "Taming Pikachu..."
# pokemon1 = Pokemon.create!(
#     name: "Pikachu", 
#     image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
#     poke_type: 'ELECTRIC',
#     user_id: user.id
# );
# puts "Teaching Pikachu some Moves....."
# moves = RestClient.get'https://pokeapi.co/api/v2/move?limit=4'
# moveArray = JSON.parse(moves)["results"]
# moveArray.each do |move|
#     move_url = RestClient.get(move["url"])
#     move_array = JSON.parse(move_url)
#     Move.create!(
#         name: move["name"], 
#         description: move_array["flavor_text_entries"][0]["flavor_text"].gsub!(/[^a-zA-Z0-9. -]/, ""), 
#         pokemon_id: pokemon1.id, 
#         user_id: user.id
#     );
# end
# puts "Saving Pikachu's Data to the Pokedex!"
# data = RestClient.get'https://pokeapi.co/api/v2/pokemon/25'
# hp = JSON.parse(data)["stats"][0]
# height = JSON.parse(data)["height"]
# weight = JSON.parse(data)["weight"]
# pokedex_number = JSON.parse(data)["id"]

# Stat.create!(
#     hp: hp["base_stat"],
#     height: height, 
#     weight: weight, 
#     pokedex_number: pokedex_number, 
#     pokemon_id: pokemon1.id, 
#     user_id: user.id
# );
# puts "LETS GO!"
