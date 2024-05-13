import { gql } from '@apollo/client';

 export const GET_COUNTRIES = gql`
  query {
    countries {
      id
      name
      emoji
    }
  }
`;


export const GET_COUNTRY_DETAILS = gql`
query GetCountryDetails($code: String!) {
    country(code: $code) {
      name
      code
      emoji
      continent {
        name
      }
    }
  }
`;

export const ADD_COUNTRY = gql`
  mutation AddCountry($name: String!, $code: String!, $emoji: String!) {
    addCountry(name: $name, code: $code, emoji: $emoji) {
      id
      name
      code
      emoji
    }
  }
`;
