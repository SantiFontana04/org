import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
    const [mostrarFormulario, actualizarMostrar] = useState(false)
    const [colaboradores, actualizarColaboradores] = useState([{
        equipo: "Front End",
        foto: "https://github.com/SantiFontana04.png",
        nombre: "Santiago Fontana",
        puesto: "Estudiante"
    },
    {
        equipo: "Front End",
        foto: "https://github.com/harlandlohora.png",
        nombre: "Harland Lohora",
        puesto: "Instructor"
    },
    {
        equipo: "UX y Diseño",
        foto: "https://github.com/JeanmarieAluraLatam.png",
        nombre: "Jeanmarie Quijada",
        puesto: "Instructora en Alura Latam"
    },
    {
        equipo: "Programación",
        foto: "https://github.com/christianpva.png",
        nombre: "Christian Velasco",
        puesto: "Head de Alura e Instructor"
    },
    {
        equipo: "Innovación y Gestión",
        foto: "https://github.com/JoseDarioGonzalezCha.png",
        nombre: "Jose Gonzalez",
        puesto: "Dev FullStack"
    }])

const [equipos, actualizarEquipos] = useState([

    {
        titulo: "Programación",
        colorPrimario: "#57c278",
        colorSecundario: "#d9f7e9"
    },
    {
        titulo: "Front End",
        colorPrimario: "#82cffa",
        colorSecundario: "#E8F8FF"
    },
    {
        titulo: "Data Science",
        colorPrimario: "#a6d157",
        colorSecundario: "#f0f8e2"
    },
    {
        titulo: "Devops",
        colorPrimario: "#e06b69",
        colorSecundario: "#fde7e8"
    },
    {
        titulo: "UX y Diseño",
        colorPrimario: "#db6ebf",
        colorSecundario: "#fae9f5"
    },
    {
        titulo: "Móvil",
        colorPrimario: "#ffba05",
        colorSecundario: "#fff5d9"
    },
    {
        titulo: "Innovación y Gestión",
        colorPrimario: "#ff8a29",
        colorSecundario: "#ffeedf"
    }
])

    //Ternario --> condicion ? seMuestra : noSemuestra
    // condicion && seMuestra

const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
}

//Registrar colaborador

const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
}

//Actualizar color de equipo
const actualizarColor = (color, titulo) => {
    console.log("Actualizar: ", color, titulo)
    const equiposActualizados = equipos.map((equipo) => {
        if(equipo.titulo === titulo) {
            equipo.colorPrimario = color
        }
        return equipo
    })

    actualizarEquipos(equiposActualizados)
}

//Eliminar colaborador
const eliminarColaborador = () => {
    console.log("Eliminar colaborador")
}

return (
    <div>
    <Header />
    {/* {mostrarFormulario ? <Formulario /> : <></>} */}
    {mostrarFormulario && <Formulario
        equipos={equipos.map( (equipo) => equipo.titulo )}
        registrarColaborador={registrarColaborador}
    />
    }

    <MiOrg cambiarMostrar={cambiarMostrar} />

    {
        equipos.map((equipo) => <Equipo 
        datos={equipo} 
        key={equipo.titulo} 
        colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        />
    )
    }

    <Footer />

    </div>
    );
} 

export default App;
