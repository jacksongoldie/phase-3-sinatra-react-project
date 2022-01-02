class UserController < ApplicationController

    get '/users' do
        User.all.to_json(include: :tasks)
    end

    post '/users' do
        user = User.create(name: params[:name], img_url: params[:img_url])
        user.to_json
    end

    delete '/users/:id' do
        user = User.find(params[:id])
        user.destroy
        user.to_json
    end

end