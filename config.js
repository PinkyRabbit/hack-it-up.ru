'use strict';

require('dotenv').config();

module.exports = {
  posts: {
    limit: parseInt(process.env.POST_LIMIT, 10),
  },
  twitter: {
    key: process.env.TWITTER_KEY,
    secret: process.env.TWITTER_SECRET,
    token_key: process.env.TWITTER_TOKEN_KEY,
    token_secret: process.env.TWITTER_TOKEN_SECRET,
  },
};