import { getSdk } from 'generated/graphql';
import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.GRAPHCMS as string;

const client = new GraphQLClient(endpoint);

const sdk = getSdk(client);

export default sdk;
