import React from 'react'
import './Form.css'



const Form = () => {
    return (
        <div className="formulario">
            <form className="appointment-form">
                <div className="columnas">
                    <div className="columna">
                        <h1>Agendar cita</h1>
                        <div className="form-group">
                            <label htmlFor="name">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                id="name"
                                name="name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Fecha de Nacimiento</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cedula">Cédula</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Cédula"
                                id="cedula"
                                name="cedula"
                                required
                            />
                        </div>
                    </div>
                    <div className="columna">
                        <div className="form-group">
                            <label htmlFor="phone">Número de Teléfono</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Número de Teléfono"
                                id="phone"
                                name="phone"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tipoDiabetes">Tipo de Diabetes</label>
                            <select name="tipoDiabetes" id="tipoDiabetes">
                                <option value="--selelect">--Seleccionar--</option>
                                <option value="Tipo 1">Tipo 1</option>
                                <option value="Tipo 2">Tipo 2</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="motivo">Motivo de la Cita</label>
                            <textarea name="motivo" id="motivo" rows="4" placeholder="Ingrese el motivo aquí..."></textarea>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">
                    Crear Cita
                </button>
            </form>
        </div>
    )
}

export default Form
