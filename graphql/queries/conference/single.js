import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';
import {Types} from 'mongoose';

import conferenceType from '../../types/conference';
import getProjection from '../../get-projection';
import ConferenceModel from '../../../models/conference';
export default {
  type: conferenceType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve (root, params, context, fieldASTs) {
    const projection = getProjection(fieldASTs);

    return ConferenceModel
      .findById(params.id)
      .select(projection)
      .exec();
  }
};
