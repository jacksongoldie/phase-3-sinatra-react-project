class TaskController < ApplicationController
    get '/tasks' do
        tasks = Task.all
        tasks.to_json
    end

    post '/tasks' do
        task = Task.create(desc: params[:desc], user_id: params[:user_id])
        task.to_json
    end

    delete '/tasks/:id' do
        task = Task.find(params[:id])
        task.destroy
        task.to_json
    end
end