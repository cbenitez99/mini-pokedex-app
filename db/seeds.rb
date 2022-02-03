puts "Seeding data **************"
user = User.create(username: "Cristian", password_digest: "1234")
trainer1 = Trainer.create(name: "Cris", party_count: 1, user_id: user.id)
trainer2 = Trainer.create(name: "Abs", party_count: 1, user_id: user.id)

pokemon1 = Pokemon.create(
    name: "Bulbasaur", 
    types: "Grass", 
    url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png", 
    trainer_id: trainer1.id
)
pokemon2 = Pokemon.create(
    name: "Ivysaur", 
    types: "Grass", 
    url: "https://archives.bulbagarden.net/media/upload/7/73/002Ivysaur.png", 
    trainer_id: trainer2.id
)
puts "Data seeded...."


