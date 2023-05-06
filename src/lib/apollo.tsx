import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  concat,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';

let client: ApolloClient<any> | null = null;

export default function getClient() {
  if (!client || typeof window === 'undefined') {
    const clientAuthLink = setContext((_, { headers }) => {
      // Get token from cookie (client or server)
      const token = getCookie('token') || cookies().get('token');
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : '',
        },
      };
    });

    client = new ApolloClient({
      ssrMode: typeof window === 'undefined',
      link: concat(
        createHttpLink({
          uri: process.env.NEXT_PUBLIC_API_URL,
        }),
        clientAuthLink
      ),
      cache: new InMemoryCache(),
    });
  }

  return client;
}
