import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import attendeeInputType from '../../types/attendee-input';
import AttendeeModel from '../../../models/attendee';
import ConferenceModel from '../../../models/conference';

export default {
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(attendeeInputType)
    }
  },
  async resolve (root, params, options) {
    console.log('attendee model', params.data);
    const attendeeModel = new AttendeeModel(params.data);
    const newAttendee = await attendeeModel.save();

    if (!newAttendee) {
      throw new Error('Error adding new attendee');
    }

    //var friend = {"firstName": req.body.fName, "lastName": req.body.lName};
    //Users.findOneAndUpdate({name: req.user.name}, {$push: {friends: friend}});

    const updateAttendee = await ConferenceModel.findOneAndUpdate({_id: params.data.conferenceId}, {
      $push: {
        attendees: newAttendee._id
      }
    });

    if (!updateAttendee) {
      throw new Error('Error updating attendee');
    }

    return true;
  }
};
