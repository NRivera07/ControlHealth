import React, { useState, useEffect } from 'react';
import './Quote.css';
import { getCitas } from '../../redux/action/action';
import { useSelector } from "react-redux";

const Quote = () => {
    const { currentUser } = useSelector((state) => state.user);
    const [citas, setCitas] = useState([]);

    useEffect(() => {
        const unsubscribe = getCitas(currentUser.uid, (citasData) => {
            setCitas(citasData);
        });

        return () => {
            // Limpia la suscripción cuando el componente se desmonta
            unsubscribe();
        };
    }, [currentUser.uid]);
    
    if (citas.length === 0) {
        return (
            <div className="sidebar">
                No hay citas disponibles.
            </div>
        );
    }

    return (
        <div className="sidebar">
            {citas.map((cita, index) => {
                const citaData = cita.data.data.cita;
                const medicoData = cita.data.data.medico;
                return (
                    <div className="quote-card" key={index}>
                        <h1>{citaData.name}</h1>
                        <span>{citaData.date}</span>
                        <span>{medicoData.displayName}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default Quote;
