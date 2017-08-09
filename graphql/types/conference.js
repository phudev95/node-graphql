// graphql/types/blog-post.js
import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLID
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Conference',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    name: {
      type: GraphQLString
    },
    city: {
      type: GraphQLString
    },
    year: {
      type: GraphQLInt
    },
    attendees: {
      type: GraphQLString
    }
  }
});
