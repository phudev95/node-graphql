// app.js
import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

import schema from './graphql';

const app = express();

// GraphqQL server route
app.use('/graphql', graphqlHTTP(req => ({
  schema,
  pretty: true
})));

app.use('/graphiql', graphqlHTTP(req => ({
  schema,
  pretty: true,
  graphiql: true
})));

// Connect mongo database
mongoose.connect('mongodb://127.0.0.1:27017/node-graphql', {
  useMongoClient: true
});
mongoose.set('debug', true);

// start server
const server = app.listen(8080, () => {
  console.log('Listening at port', `http://localhost:${server.address().port}/`);
});
