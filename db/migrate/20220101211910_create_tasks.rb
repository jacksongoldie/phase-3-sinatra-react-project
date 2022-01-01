class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :desc
      t.integer :user_id
    end
  end
end
