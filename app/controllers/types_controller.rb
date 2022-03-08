class TypesController < ApplicationController
    def index
        types = Type.all
        if types
            render json: types, status: :ok
        else
            render json: {error: ["No type to show."]}, status: :not_found
        end
    end

    def show
        type = find_type
        if type
            render json: type, status: :ok
        else
            render json: {error: ["No type to show"]}, status: :not_found
        end
    end

    # def create 
    #     type = Type.new(type_params)
    #     if type.save
    #         render json: type, status: :created
    #     else
    #         render json: {errors: type.errors.full_messages}, status: :unprocessable_entity
    #     end
    # end

    private

    # def type_params
    #     params.permit(:name, :move_id, :pokemon_id)
    # end

    def find_type
        Type.find_by(id: params[:id])
    end
end
