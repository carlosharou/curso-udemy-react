import { useLoaderData, json, defer, Await } from 'react-router-dom';
//import { useEffect, useState } from 'react';
import { Suspense } from 'react';

import EventsList from '../components/EventsList';

function EventsPage() {
    const { events } = useLoaderData();
    /*const [isLoading, setIsLoading] = useState(false);
    const [fetchedEvents, setFetchedEvents] = useState();
    const [error, setError] = useState();


    useEffect(() => {
        async function fetchEvents() {
            setIsLoading(true);
            const response = await fetch('http://localhost:8080/events');

            if (!response.ok) {
                setError('Fetching events failed.');
            } else {
            const resData = await response.json();
                setFetchedEvents(resData.events);
            }
            setIsLoading(false);
        }

        fetchEvents();
    }, []);*/


    /*return (
        <>
            {
                //<div style={{ textAlign: 'center' }}>
                //    {isLoading && <p>Loading...</p>}
                //    {error && <p>{error}</p>}
                //</div>
                //{!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
            }
            <EventsList events={events} />
        </>
    );*/


    return (
        <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
            <Await resolve={events}>
                {
                    (loadedEvents) => {
                        return (
                            <EventsList events={loadedEvents} />
                        )
                    }
                }
            </Await>
        </Suspense>
    )
}

export default EventsPage;


/*export async function loader() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        //throw new Response(JSON.stringify({
        //    message: 'Could not fetch events.'
        //}), {status: 500});
        throw new json({
            message: 'Could not fetch events.'
            }, {status: 500}
        );
    } else {
        const resData = await response.json();
        return resData.events;
    }
}*/


async function loadEvents() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        /*throw new Response(JSON.stringify({
            message: 'Could not fetch events.'
        }), {status: 500});*/
        throw new json({
            message: 'Could not fetch events.'
            }, {status: 500}
        );
    } else {
        const resData = await response.json();
        return resData.events;
    }
}


export function loader() {
    return defer({
        events: loadEvents()
    });
}