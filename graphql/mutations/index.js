import attendee from './attendee';
import conference from './conference';

export default {
  // { attendee: ..., attendees; ... }
  ...attendee,
  // { conference: ..., conferences; ... }
  ...conference
};
