class UserController < ApplicationController

    get '/users' do
        User.all.to_json(include: :tasks)
    end

    post '/users' do
        #leaving off img_url so that all users are created with default image
        user = User.create(name: params[:name])
        user.to_json(include: :tasks)
    end

    delete '/users/:id' do
        user = User.find(params[:id])
        #LEFT OFF HERE AFTER TRYING DESTROYALL - NEED TO SEE WHAT IS HAPPENING ON DELETE USER
        user.destroy
        user.to_json(include: :tasks)
    end

end