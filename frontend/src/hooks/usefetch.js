import {useState, useEffect }from 'react';

const useFetch = (url)=>{

    const [data,setData] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
            const fetchData = async()=>{
                setLoading(true);
                try{
<<<<<<< HEAD
                    const res = await fetch(url);
=======
                    const res=await fetch();
>>>>>>> 588b6bc461b3d73799f38729592af5280ed3b5af

                    if(!res.ok){
                        setError('failed to fetch');   
                    }
                    const result = await res.json();
                    setData(result.data);
                    setLoading(false);
                } catch(err){
                    setError(err.message);
                    setLoading(false);
                }
            };

            fetchData();
    }, []);

    return {
        data,
        error,
        loading,
    };
};

export default useFetch;