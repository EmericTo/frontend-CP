import { ApolloError } from '@apollo/client';

export interface Country {
  id: number;
  name: string;
  emoji: string;
}

export interface CountriesData {
  countries: Country[];
}

export interface CountriesQueryResult {
  loading: boolean;
  error?: ApolloError;
  data?: CountriesData;
}

export interface CountryDetailsProps {
    id: number; 
  }