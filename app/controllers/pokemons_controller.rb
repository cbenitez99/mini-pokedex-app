class PokemonsController < ApplicationController
    def index
        all_pokemon = Pokemon.all
        if all_pokemon
            render json: all_pokemon
        else
            render json: {error: ["No Pokemon to show."]}
        end
    end

    def show
        pokemon = Pokemon.find_by(id: params[:id])
        if pokemon
            render json: pokemon
        else
            render json: {error: ["No pokemon to show"]}
        end
    end

    def create 
        pokemon = Pokemon.new(pokemon_params)
        if pokemon.save
            render json: pokemon, status: :created
        else
            render json: {errors: pokemon.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private
    
    def pokemon_params
        params.permit(:name, :types, :url, :trainer_id)
    end
end
