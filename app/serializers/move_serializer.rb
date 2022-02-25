class MoveSerializer < ActiveModel::Serializer
  attributes :name, :pokemon_id
  belongs_to :pokemon
end
