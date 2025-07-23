import Link from 'next/link';

const NewsPage = () => {
    return (
        <>
            <p>The News Page!</p>
            <ul>
                <li><Link href="/news/nextjs-great">NextJS Is a Great Framework</Link></li>
                <li><Link href="/news/oficina-usa">Oficinas en Usa</Link></li>
            </ul>
        </>
    )
}

export default NewsPage;