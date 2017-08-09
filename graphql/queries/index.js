import blogPost from './blog-post';
import comment from './comment';
import attendee from './attendee';
import conference from './conference';

export default {
  // { blogPost: ..., blogPosts; ... }
  ...blogPost,
  // { comment: ..., comments; ... }
  ...comment,
  // { attendee: ..., attendees; ... }
  ...attendee,
  // { conference: ..., conferences; ... }
  ...conference
};
