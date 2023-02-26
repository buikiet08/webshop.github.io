import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useAsync = (promise, imedia = false) => {
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        if (imedia) {
            excute();
        }
    }, []);

    const excute = async (...rest) => {
        try {
            setLoading(true);
            setError("");
            const res = await promise(...rest);
            return res;
        } catch (err) {
            if (err?.data === "expire_account") {
                navigate('/login')
            }
            if (error?.key === 3) {
                navigate('/login')
            }
            setError(err.message || err.error);
            throw err.message || err.error;
        } finally {
            setLoading(false);
        }
    };
    return {
        excute,
        loading,
        error,
    };
};
