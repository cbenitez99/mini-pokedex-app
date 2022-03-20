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
        pokemon = find_pokemon
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
            render json: {errors: ["IT BROKE FREE! QUICK TRY AGAIN!"]}, status: :unprocessable_entity
        end
    end

    def update
        pokemon = find_pokemon
        pokemon.update(pokemon_params)
        render json: pokemon
    end

    def destroy
        pokemon = find_pokemon
        if pokemon
            pokemon.destroy
            head :no_content
        else
            render json: {error: "Pokemon not found"}, status: :not_found
        end
    end

    private

    def find_pokemon
        Pokemon.find_by(id: params[:id])
    end
    
    def pokemon_params
        params.require(:pokemon).permit(:name, :poke_type, :image, :user_id );
    end
end
