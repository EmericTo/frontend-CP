import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_COUNTRY_DETAILS } from '../graphql/client';

interface CountryDetailsProps {
  id: number;
}

export const CountryDetails = ({ id }: CountryDetailsProps) => {
  const router = useRouter();
  const { code } = router.query; 
  const countryCode = code ? String(code) : null; 

  const { data, loading, error } = useQuery(GET_COUNTRY_DETAILS, {
    variables: { code: countryCode }, 
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <h1>{data.getCountryDetails.name} {data.getCountryDetails.emoji}</h1>
      <p>Code: {data.getCountryDetails.code}</p>
      <p>Continent: {data.getCountryDetails.continent ? data.getCountryDetails.continent.name : 'N/A'}</p>
    </div>
  );
};





