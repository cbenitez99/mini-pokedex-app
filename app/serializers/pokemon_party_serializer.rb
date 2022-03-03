class PokemonPartySerializer < ActiveModel::Serializer
  attributes :id, :name, :party_count, :user_id
end
