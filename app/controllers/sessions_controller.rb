class SessionsController < ApplicationController
    #/login
    def create
        user = User.find_by_username(params[:username])
        if user 
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: "could not login"}, status: :unprocessable_entity
        end
    end

#/logout
    def destroy 
        session.clear
        render json: {"loggedOut": true}
    end
end
