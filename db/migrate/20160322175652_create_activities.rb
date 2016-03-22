class CreateActivities < ActiveRecord::Migration
  def change
    create_table :activities do |t|
      t.string :sport
      t.integer :user_id
      t.float :length

      t.timestamps null: false
    end
  end
end
