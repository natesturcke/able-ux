module.exports = {
  servers: {
    one: {
      // TODO: set host address, username, and authentication method
      host: '139.59.120.189',
      username: 'root',
      password: 'Snowbird1!Int'
      // pem: './path/to/pem'
      // password: 'server-password'
      // or neither for authenticate from ssh-agent
    }
  },

  app: {
    // TODO: change app name and path
    name: 'able',
    path: '../',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
      // TODO: Change to your app's url
      // If you are using ssl, it needs to start with https://
      ROOT_URL: 'https://able.protohype.dev',
    },

    docker: {
      // abernix/meteord:node-12-base works with Meteor 1.9 - 1.10
      // If you are using a different version of Meteor,
      // refer to the docs for the correct image to use.
      image: 'abernix/meteord:node-12.16.1-base'
    },

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true
  },
/*  proxy: {
    domains: 'champcahs.protohype.dev',
    ssl: {
      letsEncryptEmail: 'hello@soma.academy',
      forceSSL: true

    }
  },*/

  mongo: {
    version: '3.4.1',
    servers: {
      one: {}
    }
  },

  // (Optional)
  // Use the proxy to setup ssl or to route requests to the correct
  // app when there are several apps

  // proxy: {
  //   domains: 'mywebsite.com,www.mywebsite.com',

  //   ssl: {
  //     // Enable Let's Encrypt
  //     letsEncryptEmail: 'email@domain.com'
  //   }
  // }
};
