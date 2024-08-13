import { useRef } from 'react';
import Input from "./Input";
import Modal from './Modal';

export default function NewProject({ onAdd, onCancel }) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef();
    const myModal = useRef();


    const handleSave = () => {
        const titleStatus = titleRef.current.value;
        const descriptionStatus = descriptionRef.current.value;
        const dateStatus = dateRef.current.value;

        if (
            (titleStatus.trim() === '') || 
            (descriptionStatus.trim() === '') || 
            (dateStatus.trim() === '')
        ) {
            myModal.current.open();
            return;
        }

        onAdd({
            title: titleStatus,
            description: descriptionStatus,
            date: dateStatus
        });
    }

    return (
        <>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button 
                            onClick={onCancel}
                            className="text-stone-800 hover:text-stone-950">
                                Cancel
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={handleSave}
                            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
                                Save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input ref={titleRef} type="text" label="Title" isTextarea={false} />
                    <Input ref={descriptionRef} label="Description" isTextarea={true} />
                    <Input ref={dateRef} type="date" label="Due Date" isTextarea={false} />
                </div>
            </div>
            <Modal ref={myModal} buttonCaption="Close">
                <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
                <p className='text-stone-600 mb-4'>Oops ... looks like your forgot to enter a value.</p>
                <p className='text-stone-600 mb-4'>Please make sure you provide a valid value for every input field.</p>
            </Modal>
        </>
    );
}