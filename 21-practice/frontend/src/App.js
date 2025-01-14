// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';
import EventsPage, { loader as eventsLoader } from './pages/EventsPage';
import NewEventPage from './pages/NewEventPage';
import EventDetailPage, { 
    loader as eventDetailLoader,
    action as eventDetailAction
} from './pages/EventDetailPage';
import EditEventPage from './pages/EditEventPage';
import RootLayout from './pages/RootLayout';
import EventsRootLayout from './pages/EventsRootLayout';
import ErrorPage from './pages/Error';
import { action as manipulateEventAction } from './components/EventForm';
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true, element: <HomePage />
            },
            { 
                path: 'events',
                element: <EventsRootLayout />,
                children: [
                    { 
                        index: true, 
                        element: <EventsPage />,
                        /*loader: async () => {
                            const response = await fetch('http://localhost:8080/events');

                            if (!response.ok) {
                                // ...
                            } else {
                                const resData = await response.json();
                                return resData.events;
                            }
                        }*/
                       loader: eventsLoader
                    },
                    {
                        path: ':idEvent',
                        id: 'event-detail',
                        loader: eventDetailLoader,
                        children: [
                            {
                                index: true,
                                element: <EventDetailPage />,
                                action: eventDetailAction
                            },
                            { 
                                path: 'edit', 
                                element: <EditEventPage />,
                                action: manipulateEventAction
                            }
                        ]
                    },
                    { 
                        path: 'new', 
                        element: <NewEventPage />,
                        action: manipulateEventAction
                    }
                ]
            }, {
                path: 'newsletter',
                element: <NewsletterPage />,
                action: newsletterAction
            }
        ]
    }
]);


function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
