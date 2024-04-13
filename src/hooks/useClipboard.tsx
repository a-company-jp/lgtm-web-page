import { useEffect, useState } from 'react';

export const useClipboard = () => {
    const [copyText, setCopyText] = useState('');

    useEffect(() => {
        navigator.clipboard.writeText(copyText);
    }, [copyText]);

    return { setCopyText };
};

export default useClipboard;
