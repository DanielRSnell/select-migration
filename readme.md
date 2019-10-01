# Update WP Post Type Fields

## Instructions:

### Git Clone Repo
### Once inside the repo run node update.js PageNumber
Page number can be replace with which page you would like to run it on, this is to ensure no mass deletion. 

Example: node update.js 2

This updates all communities on page 2 within WordPress.

## Pre-Requisites 
Create a .env file with the wordpress endpoint, username, and password. 

### Format:
USER=YOUR USERNAME
PASS=YOUR PASSWORD
ENDPOINT=WORDPRESS URL
No quotes are required.

To create a .env file, execute touch .env