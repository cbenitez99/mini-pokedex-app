class StatSerializer < ActiveModel::Serializer
  attributes :id, :hp, :weight, :height, :pokedex_number, :pokemon_id, :user_id
end
