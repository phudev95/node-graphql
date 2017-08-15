// graphql/types/blog-post.js
import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLID
} from 'graphql';
import _ from 'lodash';
import ConferenceModel from '../../models/conference';
import getProjection from '../get-projection';


export default new GraphQLObjectType({
  name: 'Conference',

  fields: () => {
    const AttendeeType = require('./attendee');

    return {
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
        type: new GraphQLList(AttendeeType),
        args: {
          first: {
            name: 'first',
            type: GraphQLID
          }
        },
        resolve: (obj, args, context, fieldASTs) => {
          const conferenceId = obj.id;
          const options = {};

          if (_.has(args, 'first')) {
            options['limit'] = args.first;
          }

          return ConferenceModel
            .findById(conferenceId, 'attendees')
            .populate({
              path: 'attendees',
              options
            })
            .exec()
            .then(function (conference) {
              console.log(JSON.stringify(conference.attendees, null, 2));
              return conference.attendees;
            })
        }
      }
    };
  }
});
