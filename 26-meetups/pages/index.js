//import { useEffect, useState } from 'react';
import { MongoClient } from 'mongodb';
import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';


/*const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!'
    }, {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 10, 12345 Some City',
        description: 'This is a second meetup!'
    }
];*/

const HomePage = (props) => {
    /*const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        // send a http request and fetch data
        setLoadedMeetups(DUMMY_MEETUPS);
    }, []);*/

    return (
        <>
            <Head>
                <title>React Meetups</title>
                <meta name='description' content='Browse a huge list of highly active React meetups!' />
            </Head>
            <MeetupList meetups={props.meetups} />
        </>
    )
}


// solo para paginas estaticas; donde obtiene el contenido de alguna base de datos; pero, el contenido
// no suele cambiar mucho o tarda mucho en cambiar; por lo que se usa el metodo de: static-generation
// no se ejecuta en el lado del cliente, ni del servidor; solo se ejecuta en el modo del "build", por lo
// que solo se utiliza para consultar datos de alguna API o imagenes, etc
export async function getStaticProps() {
    // fetch data from some API

    const client = await MongoClient.connect('mongodb+srv://rammstein85cahu:kA0DGYf1nQYSVnac@cluster0.qvtst.mongodb.net/meetupsdb?retryWrites=true&w=majority&appName=Cluster0');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 1
    };
}


// no se ejecuta en tiempo de "build"; si no que en cada solicitud
/*export async function getServerSideProps(context) {
    const req = context.req;
    const res = context.res;

    // fetch data from some API
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    };
}*/


export default HomePage;