import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import commentType from '../../types/comment';
import getProjection from '../../get-projection';
import CommentModel from '../../../models/comment';

export default {
  type: new GraphQLList(commentType),
  args: {
    postId: {
      name: 'postId',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve (root, params, context, fieldASTs) {
    const projection = getProjection(fieldASTs);

    return CommentModel
      .find({
        postId: params.postId
      })
      .select(projection)
      .exec();
  }
};
