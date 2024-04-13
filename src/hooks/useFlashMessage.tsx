import { useState, useEffect } from 'react';

const  useFlashMessage = (displayTime: number = 3000) => {
    const [displaying, setDisplaying] = useState(true);
    
    const hide = () => {
        setDisplaying(_prev => false);
    }

    const show = () => {
        setDisplaying(_prev => true);
    }

    useEffect(() => {
        if (!displaying) return;

        const timer = setTimeout(() => {
            hide();
        }, displayTime);

        return () => {
            clearTimeout(timer);
        }
    }, [displaying]);

    return { displaying, show, hide };
}

export default useFlashMessage;
