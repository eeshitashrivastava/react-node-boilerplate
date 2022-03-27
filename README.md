# react-node-boilerplate
My boilerplate for a web application with ReactJS, NodeJs(Express), MongoDb(Mongoose), configs to deploy on Heroku. Both React and Node are deployed on same domain.
Version of JS is ES6.


Clone project and run "npm install" in 
1. boilerplate folder
2. boilerplate/client folder

To run in local for development:
1. Run both react app and node app on different domains:
    in one console run "npm start" in "boilerplate"; this runs the NodeJS server at http://localhost:8080/
    in another console run "npm start" in "boilerplate/client"; this runs the ReactJS app at http://localhost:3000/
2. Build the react app and run in node app:
    in "boilerplate" run "npm build && npm start"; this runs the NodeJS server at http://localhost:8080/
