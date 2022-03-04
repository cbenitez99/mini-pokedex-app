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

    private

    def find_type
        Type.find_by(id: params[:id])
    end
end
