puts "🌱 Seeding spices..."

goldie = User.create(name: "Goldie")
ilyas = User.create(name: "Ilyas")
louis = User.create(name: "Louis")

tasks = ['dishes', 'homework', 'feed Dusty', 'brush teeth']

15.times do
    Task.create(desc: tasks.sample, user_id: User.all.sample.id)
end

puts "✅ Done seeding!"
