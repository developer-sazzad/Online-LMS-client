import AWS from 'aws-sdk';

const s3 = new AWS.S3({
  accessKeyId: 'YOUR_ACCESS_KEY_ID',
  secretAccessKey: '830459184d08fa646c51d946c335e5a91695a',
  endpoint: 'https://YOUR_ACCOUNT_ID.r2.cloudflarestorage.com', // Your Cloudflare R2 endpoint
  region: 'auto', // Set to auto if you're unsure
  signatureVersion: 'v4',
  s3ForcePathStyle: true,
});

export { s3 };
