class AddBusinesToContacts < ActiveRecord::Migration
  def change
    add_column :contacts, :company, :string
  end
end
