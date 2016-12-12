# loopback-blog-server

The goal is to have a starter project which can be used to quickly build an API with a frontend that are easily extended.

**This software is not ready for production! It is still being developed and it will change in the future.**

## Users

After an installation the following users are created:

- **Admin user**: Email: ```admin@admin.com```, password: ```admin```
- **Regular user**: Email: ```user@user.com```:, password ```user```

Please note, at this moment there is no difference in permissions for admin users or regular users. This needs to change in the future!

## Features and implemented projects

- A LoopBack REST API with authentication enabled built on the [LoopBack Generator](https://www.npmjs.org/package/generator-loopback)


## Installation

### Dependencies

Installation depends on `node`/`npm` with `grunt` and `bower` installed globally.

    $ npm install -g bower grunt-cli

### The one-liner install (please create an [issue](https://github.com/beeman/loopback-angular-admin/issues/new) if this one does not work!)

    git clone https://github.com/beeman/loopback-angular-admin.git && cd loopback-angular-admin && npm install && grunt build && grunt serve

### The steps above: 

### Checkout the project:

    git clone https://github.com/beeman/loopback-angular-admin.git

### Install the Node packages:

    npm install

### Run grunt build:

    grunt build
    
### Run grunt serve to start the API and frontend:

    grunt serve
    

## Running

The project is separated in a server and a client.

### Server

To run the server you issue the command:

    npm start

Or to run it with nodemon (needs `nodemon` installed globally). This will
automatically restart the server when you change its code:

    npm run dev

The command `grunt serve` explained below wil automatically start the API.

## Connect to a database

You can specify the URL to the MongoDB database you want to use with the `MONGODB_URL` environment variable.

    MONGODB_URL="mongodb://localhost:27017/loopback-angular-admin" npm start

Set `INITDB` to true if you want to load the initial dataset, which creates the admin user. The memory database (default) does this automatically.

    INITDB=true MONGODB_URL="mongodb://localhost:27017/loopback-angular-admin" npm start

This also works with the free hosted MongoDB instances at [compose.io](https://www.compose.io) and [mongolab.com](https://mongolab.com)!

## API Security

**WARNING: Most models don't have an ACL configured. This means that anyone with access to the API can edit most of it's content.**

To access models with access control enable you need an AccessToken. You can get an access token by logging in to the API.

To ease development you can create an AccessToken while starting the server by setting the DEV_ACCESS_TOKEN environment variable. 

    DEV_ACCESS_TOKEN=MySecretToken npm run dev

### Useful commits

These commits might be useful when extending the functionality.

- [Add support for MongoDB databases](https://github.com/beeman/loopback-angular-admin/commit/6b884e601d535ed64b4ef4f6f07e0f55d357a5b6)
- [Add custom method to the API](https://github.com/beeman/loopback-angular-admin/commit/eedbd03f755ddf2234872886ee390ac4f6753c64)
- [Rename a model](https://github.com/beeman/loopback-angular-admin/commit/88254ce59af29818aec900514693e3fe6c94acea)

# Related Projects

Here are some projects that are related to what this project does. Please send a PR or create an issue if you have any additions to this list.

- [BoLaMN/loopback-component-admin](https://github.com/BoLaMN/loopback-component-admin) 
- [johannesjo/generator-angular-auto-admin-loopback](https://github.com/johannesjo/generator-angular-auto-admin-loopback)

# Issues

If you have any problems please [contact me](https://github.com/beeman/loopback-angular-admin/issues/new).
