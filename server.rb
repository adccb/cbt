require 'sinatra'

set :port, ENV['PORT'] || 3000
set :views, './server/views'

get '/' do
  erb :index, :layout => :layout
end
