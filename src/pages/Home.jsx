import { useEffect, useState } from "react";
import { ApiStartwars } from "../ApiStartWars.js";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
export const Home = () => {



	const { store, dispatch } = useGlobalReducer()

	const onloadGetPeople = async () => {
		try {
			const data = await ApiStartwars.getPeople()
			dispatch({ type: "add_people", value: data.results })

		} catch (error) {
			console.log(error)
		}
	}
	const onloadGetPlanets = async () => {
		try {
			const data = await ApiStartwars.getPlanet()
			dispatch({ type: "add_planets", value: data.results })
		} catch (error) {
			console.log(error)
		}
	}
	const onloadGetVehicles = async () => {
		try {
			const data = await ApiStartwars.getVehicles()
			dispatch({ type: "add_vehicles", value: data.results })
		} catch (error) {
			console.log(error)
		}
	}

	const load = async () => {
		onloadGetPeople();
		onloadGetPlanets();
		onloadGetVehicles();
	}
	const navigate = useNavigate()

	const autocomplite = (e) => {
		if (e.key == "Enter" && e.target.value !== "") {
			const name = store.people.find(people => people.properties.name === e.target.value)
			const gotoPeople = () => navigate("/single/" + name.uid + 'people')
			gotoPeople()
		}
	}
	const autocomplitePlanet = (e) => {
		if (e.key == "Enter" && e.target.value !== "") {
			const name = store.planets.find(planet => planet.properties.name === e.target.value)
			const gotoPeople = () => navigate("/single/" + name.uid + 'planet')
			gotoPeople()
			console.log(name)
		}
	}
	const autocompliteVehicle = (e) => {
		if (e.key == "Enter" && e.target.value !== "") {
			const name = store.vehicles.find(vehicle => vehicle.properties.name === e.target.value)
			const gotoPeople = () => navigate("/single/" + name.uid + 'vehicle')
			gotoPeople()
			
		}
	}
	


	useEffect(() => {
		load();
	}, [])


    console.log(store.displayV)
	return (
		<>
			<div className="home">
				<div className="title">
					<h1>Characteres</h1>
					<input className="form-control" list="people" 
					onChange={(e) => { e.target.value }} 
					onKeyDown={autocomplite} 
					placeholder="look for your favorite person"/>
					<datalist id="people">
						{store.people.map((item) => {
							return (
								<option key={item.uid} value={item.properties?.name} ></option>
							)
						})

						}

					</datalist>
				</div>
				<div className="container-home" >
					{store.people.map((item, index) => {
						return (
							<div className="people" key={item.uid}>
								<img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${item.uid}.jpg`} className="card-img-top" />
								<div className="peoplebody">
									<h5 className="home-title">{item.properties.name}</h5>
									<p className="home-text">Eyes color: {item.properties.eye_color} </p>
									<p className="home-text">Gender: {item.properties.gender} </p>
									<p className="home-text">Hair Color: {item.properties.hair_color}</p>
								</div>
								<div className="link-home">
									<Link to={"/single/" + item.uid + 'people'}>
										<button className="btn btn-primary">Learn More</button>
									</Link>
									  <div className="hearts" onClick={()=>{dispatch({ type: 'change_display',index: index, value: "visible" });dispatch({ type: 'add_favorite_people', value: item })}}>
									<FaRegHeart  className="Ciheart"  /> 
									<FaHeart className="Faheart"  />
									<FaHeart className="Faheart-color" key={index} style={{ visibility: `${store.display[index]}` }}/>
									        
									</div>
								</div>
							</div>
						);
					})}

				</div>
				<div className="title">
					<h1>Planets</h1>
					<input className="form-control" list="planets" 
					onChange={(e) => { e.target.value }} 
					onKeyDown={autocomplitePlanet} 
					placeholder="Look for your favorite Planet"/>
					<datalist id="planets">
						{store.planets.map((item) => {
							return (
								<option key={item.uid} value={item.properties?.name} ></option>
							)
						})
						}

					</datalist>
				</div>
				<div className="container-home">

					{store.planets.map((item, index) => {
						return (
							<div className="people" key={item.uid}>
								<img src="https://i.pinimg.com/474x/b0/63/59/b0635904a24f09a43e53c26bfec4c642.jpg" className="card-img-top" />
								<div className="peoplebody">
									<h5 className="home-title">{item.properties.name}</h5>
									<p className="home-text">{item.properties.diameter} </p>
									<p className="home-text">{item.properties.gravity} </p>
									<p className="home-text">{item.properties.rotation_period}</p>
								</div>
								<div className="link-home">
									<Link to={"/single/" + item.uid + 'planet'}>
										<button className="btn btn-primary">Learn More</button>
									</Link>
									<div className="hearts" onClick={()=>{dispatch({ type: 'change_displayP',index: index, value: "visible" });dispatch({ type: 'add_favorite_planet', value: item })}} >
									<FaRegHeart  className="Ciheart"  /> 
									<FaHeart className="Faheart"/>
									<FaHeart className="Faheart-color" key={index} style={{ visibility: `${store.displayP[index]}` }}/>
									</div>
								</div>
							</div>
						);
					})}
				</div>
				<div className="title">
					<h1>Vehicles</h1>
					<input className="form-control" list="vehicles" 
					onChange={(e) => { e.target.value }} 
					onKeyDown={autocompliteVehicle} 
					placeholder="Look for your favorite Vehicle"/>
					
					<datalist id="vehicles">
						{store.vehicles.map((item) => {
							return (
								<option key={item.uid} value={item.properties?.name} ></option>
							)
						})
						}
			        </datalist>
				</div>
				<div className="container-home">
					{store.vehicles.map((item, index) => {
						return (
							<div className="people" key={item.uid}>
								<img src="https://1.bp.blogspot.com/-XIialw7oa5Y/TqpdBDZ_RkI/AAAAAAAABAk/kuub8XO2ubw/s1600/naves-star-wars.jpg" className="card-img-top" />
								<div className="peoplebody">
									<h5 className="home-title">Name: {item.properties.name} </h5>
									<p className="home-text">Model: {item.properties.model} </p>
									<p className="home-text">Manufacturer: {item.properties.manufacturer} </p>
									<p className="home-text">Lenght: {item.properties.length}</p>
								</div>
								<div className="link-home">
									<Link to={"/single/" + item.uid + 'vehicle'}>
										<button className="btn btn-primary">Learn More</button>
									</Link>
									<div className="hearts" onClick={()=>{dispatch({ type: 'change_displayV',index: index, value: "visible" });dispatch({ type: 'add_favorite_vehicle', value: item })}}>
									<FaRegHeart  className="Ciheart" /> 
									<FaHeart className="Faheart" />
									<FaHeart className="Faheart-color" key={index} style={{ visibility: `${store.displayV[index]}` }}/>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>

		</>
	);
};

