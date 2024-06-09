import React, { useEffect } from 'react';
import DetailsPage from './Details';
import { SessionContext, SessionContextType } from '@/components/Contexts/Context';
import { useRouter } from 'next/router';

function Page() {
    const { current } = React.useContext(SessionContext) as SessionContextType;
    const router = useRouter();

    useEffect(() => {
        if (current.expires == 0) {
            router.push(`/login`);
        }
    }, [current.expires, router]);
    return (
        <div>
            <DetailsPage />
        </div>
    );
}

export default Page;