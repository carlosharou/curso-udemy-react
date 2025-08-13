//import { useAccordionContext } from './Accordion';
import { createContext, useContext } from 'react';

const AccordionItemContext = createContext();


export const useAccordionItemContext = () => {
    const ctx = useContext(AccordionItemContext);

    if (!ctx) {
        throw new Error('AccordionItem-related must be wrapped by <Accordion.Item>')
    }

    return ctx;
}


const AccordionItem = ({ 
    id, 
    //title,
    className, 
    children 
}) => {
    /*const { 
        openItemId, 
        /*openItem, 
        closeItem,*/
        /*toggleItem
    } = useAccordionContext();

    const isOpen = openItemId === id;


    /*const handleClick = () => {
        if (isOpen) {
            closeItem();
        } else {
            openItem(id);
        }
       toggleItem(id);
    }*/


    return (
        <AccordionItemContext.Provider value={ id }>
            <li className={ className }>
                {
                    /*<h3 onClick={ () => { toggleItem(id); } }>{ title }</h3>
                    <div className={ isOpen ? 'accordion-item-content open' : 'accordion-item-content' }>{ children }</div>*/
                    children
                }
            </li>
        </AccordionItemContext.Provider>
    );
}
export default AccordionItem;