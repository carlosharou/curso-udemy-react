import { useRouteError } from 'react-router-dom';

import PageContent from '../components/PageContent';
import MainNavigation from '../components/MainNavigation';

const ErrorPage = () => {
    const error = useRouteError();

    let title = 'An error occurred!';
    let message  = 'Something went wrong!';


    if (error.status === 5000) {
        message = error.data.message;//JSON.parse(error.data).message;
    }
    if (error.status === 404) {
        title = 'Not found';
        message = 'Could not find resource or page.';
    }

    return (
        <>
            <MainNavigation />
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
        </>
    )
}

export default ErrorPage;