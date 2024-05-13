import { useState } from 'react'; 
import { CountryList } from '../components/CountryList';
import { AddCountryForm } from '../components/AddCountryForm';
import { CountryDetails } from '@/components/CountryDetails';

export default function Home() {
  const [selectedCountryId, setSelectedCountryId] = useState<number | null>(null); 

  const handleCountryClick = (id: number) => {
    setSelectedCountryId(id); 
  };

  return (
    <div>
      <AddCountryForm />
      <CountryList onCountryClick={handleCountryClick} /> 
      {selectedCountryId && <CountryDetails id={selectedCountryId} />} 
    </div>
  );
}
