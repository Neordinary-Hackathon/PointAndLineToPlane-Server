# docker-entrypoint.sh for node.js

echo "wait db server"
dockerize -wait tcp://db:3306 -timeout 40s

echo "start node server"
npm start