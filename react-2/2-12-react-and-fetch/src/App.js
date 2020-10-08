import React, {useEffect, useState} from 'react';
import {Provider, defaultTheme,TextField, ActionButton} from '@adobe/react-spectrum'
import styles from './App.module.css';

function App() {
	const [motos, setMotos] = useState([]);
	const [formData, setFormData] = useState({marca: "", modelo: "", color: "", cilindrada: "", precio: 0 })

	useEffect(() => {
		fetch("http://localhost:3001/motos")
			.then(response => response.json())
			.then(data => setMotos(data));

	}, [])

	const handleChangeFormData = (key, value) => {
		setFormData({...formData, [key]: value});
	}


  return (
		<Provider theme={defaultTheme}>
			<div className="App">
				<div className={styles.list}>
					{motos.map(moto => (<div> {moto.marca}</div>))}
				</div>

				<div className={styles.form}>
					<TextField label="Marca" value={formData.marca} onChange={value => handleChangeFormData("marca", value)}/>
					<TextField label="Modelo" value={formData.modelo} onChange={value => handleChangeFormData("modelo", value)}/>
					<TextField label="Color" value={formData.color} onChange={value => handleChangeFormData("color", value)}/>
					<TextField label="Cilindrada" value={formData.cilindrada} onChange={value => handleChangeFormData("cilindrada", value)}/>
					<TextField label="Precio" value={formData.precio} onChange={value => handleChangeFormData("precio", value)}/>
					<ActionButton onPress={/*aqui vuestra funcion*/}> Send Data</ActionButton>
				</div>
			</div>
		</Provider>
  );
}

export default App;
