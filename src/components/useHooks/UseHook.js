import { useEffect } from 'react';

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - HungryNaki`;
    }, [title])
};

export default useTitle;