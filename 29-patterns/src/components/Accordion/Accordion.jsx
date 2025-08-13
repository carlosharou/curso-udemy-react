import { createContext, useContext, useState } from 'react';
import AccordionItem from './AccordionItem';
import AccordionTitle from './AccordionTitle';
import AccordionContent from './AccordionContent';

const AccordionContext = createContext();


export const useAccordionContext = () => {
    const ctx = useContext(AccordionContext);

    if (!ctx) {
        throw new Error('Accordion-related must be wrapped by <Accordion>.');
    }

    return ctx;
}


const Accordion = ({ children, className }) => {
    const [ openItemId, setOpenItemId ] = useState();


    const toggleItem = (id) => {
        setOpenItemId(prevId => prevId === id ? null : id);
    }


    /*const openItem = (id) => {
        setOpenItemId(id);
    }

    const closeItem = () => {
        setOpenItemId(null);
    }*/

    const contextValue = {
        openItemId: openItemId,
        /*openItem,
        closeItem,*/
        toggleItem
    }


    return (
        <AccordionContext.Provider value={ contextValue }>
            <ul className={className}>
                { children }
            </ul>
        </AccordionContext.Provider>
    );
}

export default Accordion;


Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;