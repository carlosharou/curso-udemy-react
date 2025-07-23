import { useRouter } from 'next/router';

const NewsDetailsPage = () => {
    const router = useRouter();

    console.log('param:', router.query.newsId);

    return (
        <>
            <p>Hello News Details Page!</p>
        </>
    )
}

export default NewsDetailsPage;