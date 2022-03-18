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
puts "Data seeded...."