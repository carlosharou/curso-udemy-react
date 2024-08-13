import { json, redirect, useRouteLoaderData, defer, Await } from 'react-router-dom';
import { Suspense } from 'react';

import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';


const EventDetailPage = () => {
    const { event, events } = useRouteLoaderData('event-detail');
    

    return (
        <>
            <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
                <Await resolve={event}>
                    {
                        (loadedEvent) => {
                            return (
                                <EventItem event={loadedEvent} />
                            )
                        }
                    }
                </Await>
            </Suspense>
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
        </>
    );
}

export default EventDetailPage;


export async function loader({ request, params }) {
    const idEvent = params.idEvent;

    /*const response = await fetch('http://localhost:8080/events/' + idEvent);
    
    if (!response.ok) {
        throw json({
            message: 'Could not fetch details for selected event.'
        }, {
            status: 500
        });
    } else {
        return response;
    }*/
    return defer({
        event: await loadEvent(idEvent),
        events: loadEvents()
    });
}


export async function action({ request, params }) {
    const idEvent = params.idEvent;

    const response = await fetch('http://localhost:8080/events/' + idEvent, {
        method: request.method
    });

    if (!response.ok) {
        throw json({
            message: 'Could not delete event.'
        }, {
            status: 500
        });
    } else {
        return redirect('/events');
    }
}


async function loadEvents() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        throw new json({
            message: 'Could not fetch events.'
            }, {status: 500}
        );
    } else {
        const resData = await response.json();
        return resData.events;
    }
}


async function loadEvent(idEvent) {
    const response = await fetch('http://localhost:8080/events/' + idEvent);

    if (!response.ok) {
        throw json({
            message: 'Could not delete event.'
        }, {
            status: 500
        });
    } else {
        const resData = await response.json();
        return resData.event;
    }
}