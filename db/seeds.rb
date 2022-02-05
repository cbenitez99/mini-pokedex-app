puts "Seeding data **************"
user = User.create(username: "Cristian", password_digest: "1234")
user2 = User.create(username: "Alex", password_digest: "54321")

trainer1 = Trainer.create(name: "Cris", party_count: 0, user_id: user.id)
trainer2 = Trainer.create(name: "Abs", party_count: 0, user_id: user2.id)

pokemon1 = Pokemon.create(
    name: "Bulbasaur", 
    types: "Grass", 
    url: "https://art.pixilart.com/6ba93206eb9dad5.png", 
    trainer_id: trainer1.id
)
pokemon2 = Pokemon.create(
    name: "Ivysaur", 
    types: "Grass", 
    url: "https://www.pngkit.com/png/detail/223-2239891_ivysaur-sprite-pokemon-pixel-art-ivysaur.png", 
    trainer_id: trainer2.id
)
pokemon3 = Pokemon.create(
    name: "Venusaur", 
    types: "Grass", 
    url: "https://www.pngkit.com/png/detail/568-5684955_venusaur-venusaur-sprite.png", 
    trainer_id: trainer1.id
)
puts "Data seeded...."


