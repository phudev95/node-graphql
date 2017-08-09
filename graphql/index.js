import {
  GraphQLObjectType,
  GraphQLSchema
} from 'graphql';

import mutations from './mutations';
import queries from './queries';

// conferences
// conference
// attendees
// attendee

//console.log('/////////////////');
//console.log(JSON.stringify(mutations, null, 2));

/*
{
  "addBlogPost": {
    "type": "Boolean",
    "args": {
      "data": {
        "name": "data",
        "type": "BlogPostInput!"
      }
    }
  },
  "removeBlogPost": {
    "type": "BlogPost",
    "args": {
      "_id": {
        "name": "_id",
        "type": "ID!"
      }
    }
  },
  "removeAllBlogPosts": {
    "type": "Boolean"
  },
  "addComment": {
    "type": "Boolean",
    "args": {
      "data": {
        "name": "data",
        "type": "CommentInput!"
      }
    }
  },
  "removeComment": {
    "type": "Comment",
    "args": {
      "_id": {
        "name": "_id",
        "type": "ID!"
      }
    }
  },
  "removeAllComments": {
    "type": "Boolean"
  }
}
*/

/*
queries = {
  "blogPost": {
    "type": "BlogPost",
    "args": {
      "id": {
        "name": "id",
        "type": "ID!"
      }
    }
  },
  "blogPosts": {
    "type": "[BlogPost]",
    "args": {}
  },
  "comment": {
    "type": "Comment",
    "args": {
      "id": {
        "name": "id",
        "type": "ID!"
      }
    }
  },
  "comments": {
    "type": "[Comment]",
    "args": {
      "postId": {
        "name": "postId",
        "type": "ID!"
      }
    }
  }
}
 */

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: queries
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: mutations
  })
});
