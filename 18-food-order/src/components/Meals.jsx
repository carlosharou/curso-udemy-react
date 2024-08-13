//import { useState, useEffect } from "react";
import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";


const requestConfig = {};


export default function Meals() {
    const {
        data: dataMeals,
        isLoading,
        error
    } = useHttp('http://localhost:3000/meals', requestConfig, [])
    /*const [dataMeals, setDataMeals] = useState([]);


    useEffect(() => {
        const fetchMeals = async() => {
            try {
                const data = await fetch('http://localhost:3000/meals');
                const meals = await data.json();
                setDataMeals(meals);
            } catch(error) {
                console.log(error);
            }
        }


        fetchMeals();
    }, [])*/


    if (isLoading) {
        return <p className="center">Fetching meals...</p>
    }


    if (error) {
        return <Error 
            title="Failed to fetch meals"
            message={error}
        />
    }


    return (
        <ul id="meals">
            {dataMeals.map(_meal => {
                return (
                    <MealItem
                        key={_meal.id}
                        meal={_meal}
                    />
                );
            })}
        </ul>
    );
}