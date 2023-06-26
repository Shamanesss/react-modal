import React, { useState } from "react";

export const MiPrimerComponente = () => {
    // let nombre = "Pepito Grillo";
    let web = "pepitogrillo.com";

    let [nombre, SetNombre] = useState("Pepito Grillo");

    let aficiones = ["Dar un silvidito", "Ver las estrellas", "Cantar"];

    const cambiarNombre = (nuevonombre) => {
        SetNombre(nuevonombre);
    };
    //---------------------------------------
    // esta funcion la he agregado para que cuando pulse el boton de cambiar nombre 
    // se actualice el input con lo nuevo
    const InputChange = (e) => {
        cambiarNombre(e.target.value);
    };

    // ---------------------------

    return (
        <div>
            <h1>Este es mi primer Componente</h1>
            <p>Este parrafo pertenece a mi primer componente</p>
            <p>

                <strong className={nombre.length >= 6 ? 'verde' : 'rojo'}>{nombre}</strong> es un distinguido Grillo con su pagina web {web}
            </p>
            {/* <input
                type="text"
                onChange={(e) => cambiarNombre(e.target.value)}
                placeholder="Dime un nombre"
            /> */}
            <input
                type="text"
                value={nombre}
                onChange={InputChange}
                placeholder="Dime un nombre"
            />

            <button
                onClick={(e) => {
                    console.log("El nombre guardado en tu estado es: ", nombre);
                }}
            >
                Mostrar el valor de estado
            </button>

            <button
                onClick={(e) => cambiarNombre(nombre)}
            >
                Cambiar nombre
            </button>
            <h2>Aficiones</h2>
            <ul>
                {aficiones.map((aficion, indice) => {
                    return <li class="no_points" key={indice}>{aficion}</li>;
                })}
            </ul>
        </div>
    );
};
