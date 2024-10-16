
"use client";

import { ApolloProvider as Apollo } from "@apollo/client";
import client from "./appoloClient"; // Adjust the path if needed


interface Props {
  children: React.ReactNode;
}

export default function ApolloProvider({ children }: Props) {
  return <Apollo client={client}>{children}</Apollo>;
}