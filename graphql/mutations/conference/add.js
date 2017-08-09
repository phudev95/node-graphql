import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import conferenceInputTye from '../../types/conference-input'
import ConferenceModel from '../../../models/conference';

export default {
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(conferenceInputTye)
    }
  },
  async resolve (root, params, options) {
    const conferenceModel = new ConferenceModel(params.data);
    const newConference = await conferenceModel.save();

    if (!newConference) {
      throw new Error('Error adding new conference');
    }
    return true;
  }
};
