import { useState, useEffect } from 'react';
import { list } from '../fetch/LGTM';

const useLGTMFetch = (activePage: number) => {
  const [LGTMUrls, setLGTMUrls] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await list(activePage);
        const lgtmUrls = response.map((d) => ({imageUrl: d.url}));
        setLGTMUrls(lgtmUrls);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchData();
  }, [activePage]);

  return { LGTMUrls, loading, error };
}

export default useLGTMFetch;
