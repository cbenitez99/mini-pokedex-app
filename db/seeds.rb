puts "Seeding data **************"
user = User.create(username: "Cristian", password_digest: "1234")
trainer = Trainer.create(name: "Cris", party_count: 1, user_id: user.id)
pokemon = Pokemon.create(
    name: "Bulbasaur", 
    types: "Grass", 
    url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png", 
    trainer_id: trainer.id
)
puts "Data seeded...."


