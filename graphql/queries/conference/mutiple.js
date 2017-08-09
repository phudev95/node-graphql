import {
  GraphQLList
} from 'graphql';

import conferenceType from '../../types/conference';
import getProjection from '../../get-projection';
import ConferenceModel from '../../../models/conference';

export default {
  type: new GraphQLList(conferenceType),
  args: {},
  resolve (root, params, context, fieldASTs) {
    const projection = getProjection(fieldASTs);

    console.log('projection', projection);

    return ConferenceModel
      .find()
      .select(projection)
      .exec();
  }
};
