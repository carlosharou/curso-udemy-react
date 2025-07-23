'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";


const isInvalidText = (text) => {
    return !text || text.trim() === '';
}


export async function shareMeal(prevState, formData) {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }

    if (
        isInvalidText(meal.title) || 
        isInvalidText(meal.summary) || 
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        meal.image || meal.image.size === 0
    ) {
        //throw new Error('Invalid Input');
        return {
            message: 'Invalid Input'
        };
    }

    await saveMeal(meal);
    revalidatePath('/meals');//borra el cache y revalida la pagina de meals y todas las paginas anidadas a esta con la opción del layout
    redirect('/meals');
}