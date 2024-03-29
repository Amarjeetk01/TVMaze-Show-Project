import  { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utilits/Api";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
 
    useEffect(() => {
        
        const fetchApiData = async () => {
            setLoading(true);
            setError(null);
            setData([]);
            try {
                const response = await fetchDataFromApi(url);
                setData(response);
                setLoading(false);
            } catch (err) {
                setLoading(false);
                setError("Something went wrong");
            }
        };

        fetchApiData();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
