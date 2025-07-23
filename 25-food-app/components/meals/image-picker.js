'use client'

import { useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({ label, name }) {
    const [pickedImage, setPickedImage] = useState();
    const imageInputRef = useRef();

    const handlePickClick = () => {
        imageInputRef.current.click();
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        }
    }


    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image picked yet</p>}
                    {pickedImage && <Image src={pickedImage} alt='the image selected by the user' fill />}
                </div>
                <input 
                    type='file' 
                    id={name}
                    accept='image/png, image/jpeg' 
                    name={name} 
                    className={classes.input}
                    ref={imageInputRef}
                    onChange={handleImageChange}
                    required
                />
                <button 
                    className={classes.button}
                    type='button'
                    onClick={handlePickClick}>
                    Pick an Image
                </button>
            </div>
        </div>
    );
}