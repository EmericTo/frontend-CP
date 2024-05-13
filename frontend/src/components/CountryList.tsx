import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from '../graphql/client';
import { CountriesData } from '../graphql/types';
import { useRouter } from 'next/router';

interface CountryListProps {
    onCountryClick: (id: number) => void;
  }

  
export function CountryList({ onCountryClick }: CountryListProps) {
  const { data, loading, error } = useQuery<CountriesData>(GET_COUNTRIES);
  const router = useRouter();

  const handleCountryClick = (id: number) => {
    router.push(`/country/${id}`); 
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="country-list">
      {data?.countries.map(({ id, name, emoji }) => (
        <div key={id} className="country-item" onClick={() => handleCountryClick(Number(id))}>
          <span className="emoji">{emoji}</span>
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
}
