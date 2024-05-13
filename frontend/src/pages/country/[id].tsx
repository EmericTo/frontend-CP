import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_COUNTRY_DETAILS } from '../../graphql/client';
import { gql } from '@apollo/client';

const CountryDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const countryId = parseInt(id as string, 10); 

  const { data, loading, error } = useQuery(GET_COUNTRY_DETAILS, {
    variables: { id: countryId }, 
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <h1>{data.country.name} {data.country.emoji}</h1>
      <p>Code: {data.country.code}</p>
      <p>Continent: {data.country.continent ? data.country.continent.name : 'N/A'}</p>
    </div>
  );
};

export default CountryDetails;
