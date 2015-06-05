#!/bin/bash

echo -e "Please enter the name of your application: "
read appName

echo "Setting up $appName..."

# Remove meteor setup files
echo "Removing meteor create files..."
rm $appName.*

# Create initial structure
echo "Creating directories: \client \server \lib \public"
mkdir client
mkdir server
mkdir lib
mkdir public

# Create client directories and files
echo "Setting up client directories and files..."
mkdir -p "client/stylesheets"
mkdir "client/templates"
mkdir "client/templates/application"
mkdir "client/templates/includes"

touch "client/stylesheets/style.css"
touch "client/main.html"
touch "client/templates/application/layout.html"
touch "client/templates/application/layout.js"
touch "client/templates/application/not_found.html"
touch "client/templates/includes/access_denied.html"
touch "client/templates/includes/header.html"
touch "client/templates/includes/header.js"
touch "client/templates/includes/loading.html"

# Create lib directories and files
echo "Setting up lib directories and files..."
mkdir "lib/collections"

touch "lib/router.js"

# Create server directories and files
echo "Setting up server directories and files..."
touch "server/fixtures.js"
touch "server/publications.js"

echo "Setup complete!"