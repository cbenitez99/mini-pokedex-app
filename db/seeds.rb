# require "rest-client"
puts "Seeding data **************"
user = User.create(username: "Cristian", password: "coder123")
# user2 = User.create(username: "Alex", password_digest: "54321")

# trainer1 = Trainer.create(name: "Cris", party_count: 0, user_id: user.id)
# trainer2 = Trainer.create(name: "Abs", party_count: 0, user_id: 2)

pokemon1 = Pokemon.create(
    name: "Bulbasaur", 
    types: "Grass", 
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", 
    user_id: user.id
)
pokemon2 = Pokemon.create(
    name: "Ivysaur", 
    types: "Grass", 
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png", 
    user_id: user.id
)
pokemon3 = Pokemon.create(
    name: "Venusaur", 
    types: "Grass", 
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png", 
    user_id: user.id
)
# resp = RestClient.get("https://pokeapi.co/api/v2/pokemon")
# pokemonData = JSON.parse(resp)["results"]
# byebug
# pokemonData.each do |poke_hash|
#     Pokemon.create!(
#         name: poke_hash["name"],
#         url: poke_hash["url"]
#     );
# end

puts "Data seeded...."


