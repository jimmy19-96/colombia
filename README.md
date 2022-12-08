# COLOMBIAN-BUDDY

This is a basic Web application where users can see some of the touristic places in Colombia and subscribe on them using Javascript Technologies like Nodejs, Mongodb, and other related technologies. Tecnically this is a Multi-Page Application using Handlebars as template engine.

This app can do:

- CRUD Operations: create/read/update/delete Places and Subscriptions
- Allows a user to do login, to create an account and see the places to subscribe on them

### Installation

```sh
git clone https://github.com/jimalaros/colombia
cd colombia
npm install
npm run dev # run in development mode
npm start # run in production mode
```

> You need to have Mongodb installed Locally or stablish a MONGODB_URI environment variable in order to connect to any mongodb instance (using Mongodb Atlas for example)

### Environment Variables

This app needs the following environment Variables

- `MONGODB_URI` this is the Mongodb URI string
- `PORT` the server http port for the application
- `PASS` password for nodemailer app

### Default User

when the app is lauched, this will create an Admin user with the following credentials:

- email: `jaao@gmail.com`
- password: `adminpassword`
