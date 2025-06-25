import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]); // Initialize as null
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url);

                if (!res.ok) {
                    setError('Failed to fetch'); // Throw an error to be caught
                    alert("failed to fetch");
                }

                const result = await res.json();
                setData(result.data); // Adjust based on the actual structure of your response
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false); // Ensure loading is set to false in both cases
            }
        };

        fetchData();
    }, [url]); // Include url in dependency array

    return {
        data,
        error,
        loading,
    };
};

export default useFetch;