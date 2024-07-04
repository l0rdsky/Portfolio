import { TwitterApi } from 'twitter-api-v2';



const twitterClient = new TwitterApi({
    appKey: "WJlLpeaLwZMw14TSg2Uj3qvxj",
    appSecret: "t7S7xBFeUGiZNuTpqyA59Lz1PN8SBCVKhznMVtOpMRrQgNtPi8",
    accessToken: "1580855143033352195-UO6Es3yHxi7aModI6APhSSkGT10naF",
    accessSecret: "MQU0ujYUnNHgUN1u23MiRb7SH1m8vJkuwjYKKRDIfekvo",
  });

export default async function handler(req, res) {
  try {
    const username = 'l0rdsky34';
    const user = await twitterClient.v2.userByUsername(username);
    const userId = user.data.id;

    const tweets = await twitterClient.v2.userTimeline(userId, { exclude: 'replies' });
    const retweets = await twitterClient.v2.userTimeline(userId, { exclude: 'tweets' });

    const allTweets = tweets.data.data.concat(retweets.data.data);

    const tweetData = allTweets.map(tweet => ({
      quote: tweet.text,
      name: tweet.author_id || 'Unknown User',
      profileImage: `https://twitter.com/${tweet.author_id}/profile_image?size=original`,
    }));

    res.status(200).json(tweetData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch tweets' });
  }
}
