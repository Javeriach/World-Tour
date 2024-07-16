import { useParams, useSearchParams } from 'react-router-dom';

export function usePosition() {
  let [searchParams] = useSearchParams();
  let lat = searchParams.get('lat');
  let lng = searchParams.get('lng');
  return { lat, lng };
}
