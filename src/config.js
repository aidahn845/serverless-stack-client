const dev = {
  STRIPE_KEY: "YOUR_STRIPE_DEV_PUBLIC_KEY",
  s3: {
    REGION: "us-east-2",
    BUCKET: "yh-notes-uploads"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://8r8hz7layj.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_OqPcKzpWC",
    APP_CLIENT_ID: "12sgarhlsi1ea43791aqrh8dhp",
    IDENTITY_POOL_ID: "us-east-2:c5f9a4be-aad3-46a5-ad90-baf12fd9e776"
  }
};

const prod = {
  STRIPE_KEY: "YOUR_STRIPE_PROD_PUBLIC_KEY",
  s3: {
    REGION: "us-east-2",
    BUCKET: "yh-notes-uploads"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://8r8hz7layj.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_OqPcKzpWC",
    APP_CLIENT_ID: "12sgarhlsi1ea43791aqrh8dhp",
    IDENTITY_POOL_ID: "us-east-2:c5f9a4be-aad3-46a5-ad90-baf12fd9e776"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};