import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  // uri: "http://localhost:5000/query", 
  uri:process.env.NEXT_PUBLIC_GRAPHQL_URL,
  
  cache: new InMemoryCache(),
});

console.log("process.env.NEXT_PUBLIC_GRAPHQL_URL",process.env.NEXT_PUBLIC_GRAPHQL_URL)

// const client = new ApolloClient({
//   uri: 'https://flyby-router-demo.herokuapp.com/',
//   cache: new InMemoryCache(),
// });

export default client;


