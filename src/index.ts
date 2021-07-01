import SDK from '@ringcentral/sdk';

const sdk = new SDK({
  clientId: process.env.RINGCENTRAL_CLIENT_ID!,
  clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
  server: process.env.RINGCENTRAL_SERVER_URL!,
});

(async () => {
  await sdk.login({
    username: process.env.RINGCENTRAL_USERNAME!,
    extension: process.env.RINGCENTRAL_EXTENSION!,
    password: process.env.RINGCENTRAL_PASSWORD!,
  });

  const endpoint = '/restapi/v1.0/account/~/extension/~';

  const r = await sdk.send({
    method: 'get',
    url: endpoint,
    body: undefined,
    query: undefined,
    headers: undefined,
  });

  console.log(r.url.split(endpoint)[0]);
})();
