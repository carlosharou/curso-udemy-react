import Head from 'next/head';
import { MongoClient, ObjectId } from 'mongodb';
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetailsPage = (props) => {
    return (
        <>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name='description' content={props.meetupData.description} />
            </Head>
            <MeetupDetail
                title={props.meetupData.title}
                address={props.meetupData.address}
                image={props.meetupData.image}
                description={props.meetupData.description}
            />
        </>
    );
}


export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://rammstein85cahu:kA0DGYf1nQYSVnac@cluster0.qvtst.mongodb.net/meetupsdb?retryWrites=true&w=majority&appName=Cluster0');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

    client.close();

    /*
        fallback:
            true: realiza todas las existentes y posibles
            false: para indicar que solo realice las paginas static durante el build indicadas
            blocking: genera las staticas solo cuando se necesita, mientras genera cache y de ahi lo consulta ( es mejor usar esta opcion cuando en producción )
    */

    return {
        /*
        fallback: 'false', // false: para indicar que solo realice las paginas static durante el build indicadas; true: realiza todas las existentes y posibles
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            }, {
                params: {
                    meetupId: 'm2'
                }
            }
        ]*/
        fallback: 'blocking',
        paths: meetups.map(meetup => ({
            params: {
                meetupId: meetup._id.toString()
            }
        }))
    }
}


export async function getStaticProps(context) {
    const id = context.params.meetupId;

    const client = await MongoClient.connect('mongodb+srv://rammstein85cahu:kA0DGYf1nQYSVnac@cluster0.qvtst.mongodb.net/meetupsdb?retryWrites=true&w=majority&appName=Cluster0');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');

    const meetupSelected = await meetupsCollection.findOne({ _id: new ObjectId(id) });

    client.close();

    return {
        props: {
            meetupData: {
                id: meetupSelected._id.toString(),
                title: meetupSelected.title,
                image: meetupSelected.image,
                description: meetupSelected.description,
                address: meetupSelected.address
            }
        }
    }
}

export default MeetupDetailsPage;