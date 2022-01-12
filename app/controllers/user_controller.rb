class UserController < ApplicationController

    get '/users' do
        users = User.all.sort_by { |u| u[:name].downcase }
        users.to_json(include: :tasks)
    end

    post '/users' do
        #leaving off img_url so that all users are created with default image
        user = User.create(name: params[:name])
        user.to_json(include: :tasks)
    end

    delete '/users/:id' do
        user = User.find(params[:id])
        user.destroy
        #iterate over user.tasks to remove user's tasks -- NO; added dependent: :destroy to model
        user.to_json(include: :tasks)
    end

end