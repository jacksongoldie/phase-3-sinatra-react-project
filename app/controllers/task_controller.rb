class TaskController < ApplicationController
    get '/tasks' do
        tasks = Task.all
        tasks.to_json
    end
end