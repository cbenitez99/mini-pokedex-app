class TrainerSerializer < ActiveModel::Serializer
  attributes :id, :name, :party_count
  has_many :pokemons
end
