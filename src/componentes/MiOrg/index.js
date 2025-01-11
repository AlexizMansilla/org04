import { useState } from 'react';
import './MiOrg.css'
const MiOrg = () => {
    //Estado - hooks
    //useState
    //useState()
    console.log(useState())
    const manejarClick = () => {
        console.log("Mostrar/ocultar elemento");
    }


    return <section className="orgSection">
        <h3 className="title"> Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={manejarClick} />
    </section>
}
export default MiOrg