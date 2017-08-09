import blogPost from './blog-post';
import comment from './comment';
import attendee from './attendee';
import conference from './conference';

export default {
  // { addBlogPost: ..., removeBlogPost: ..., removeAllBlogPosts: ... }
  ...blogPost,
  // { addComment: ..., removeComment: ..., removeAllComments: ... }
  ...comment,
  // { attendee: ..., attendees; ... }
  ...attendee,
  // { conference: ..., conferences; ... }
  ...conference
};
