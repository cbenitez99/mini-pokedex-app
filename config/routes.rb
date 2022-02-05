Rails.application.routes.draw do
  resources :pokemons, only: [:index, :show, :create, :destroy]
  resources :trainers, only: [:index, :show]
  resources :users, only: [:index, :show]
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"


end
