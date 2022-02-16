class PokemonsController < ApplicationController
    def index
        all_pokemon = Pokemon.all
        if all_pokemon
            render json: all_pokemon, status: :ok
        else
            render json: {error: ["No Pokemon to show."]}, status: :not_found
        end
    end

    def show
        pokemon = Pokemon.find_by(id: params[:id])
        if pokemon
            render json: pokemon, status: :ok
        else
            render json: {error: ["No pokemon to show"]}, status: :not_found
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
        params.require(:pokemon).permit(:user_id, :name, :types, :url)
    end
end
