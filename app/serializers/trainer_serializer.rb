class TrainerSerializer < ActiveModel::Serializer
  attributes :id, :name, :party_count
  belongs_to :user
end
