json.array!(@activities) do |activity|
  json.extract! activity, :id, :type, :user_id, :length
  json.url activity_url(activity, format: :json)
end
