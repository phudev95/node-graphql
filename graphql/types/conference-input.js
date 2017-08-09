// graphql/types/blog-post.js
import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'ConferenceInput',
  fields: {
    _id: {type: GraphQLID},
    name: {type: GraphQLString},
    city: {type: GraphQLString},
    year: {type: GraphQLInt},
    attendees: {type: GraphQLString}
  }
});
