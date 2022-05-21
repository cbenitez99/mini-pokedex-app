Rails.application.routes.draw do
  resources :stats
  resources :moves, only: [:index, :show, :create, :update, :destroy]
  resources :pokemons, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:show, :create]
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
