#!/usr/bin/env bash

 PROJECT_NAME="myexam"
 DROPLET_URL="157.230.127.186"
#echo -n "please enter the project name as it appears on the server in /var/www/"
#read -r
#PROJECT_NAME=$REPLY
#echo -n "please enter the droplet url (e.g myserver.dk)"
#read -r
#DROPLET_URL=$REPLY

echo "##############################"
echo "Building the Frontend project"
echo "##############################"
npm run build

echo "##############################"
echo "Deploying Frontend project..."
echo "##############################"

scp -r ./dist/* root@$DROPLET_URL:/var/www/$PROJECT_NAME
