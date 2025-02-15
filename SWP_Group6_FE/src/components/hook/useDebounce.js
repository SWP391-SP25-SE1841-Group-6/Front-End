
import { useEffect, useState } from "react";

export default function useDebounce(initiallizeValue = '', delay = 1000) {
    // lấy gtri sau 1 khaong3 time = settimeout
    const [Debounce,setDebounce] =useState('');
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounce(initiallizeValue);
        },1000);
        return ()=> {
            clearTimeout(timer)
        }
    },[delay, initiallizeValue]);
    return Debounce;
}