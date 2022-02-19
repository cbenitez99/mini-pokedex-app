class SessionsController < ApplicationController
    #/login
    def create
        user = User.find_by_username(params[:username])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: ["Invalid username or password"]}, status: :unprocessable_entity
        end
    end

#/logout
    def destroy 
        session.clear
        render json: {"loggedOut": true}
    end
end
