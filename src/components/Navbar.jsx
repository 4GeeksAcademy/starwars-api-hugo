import { renderToNodeStream } from "react-dom/server";
import { Link } from "react-router-dom";
import storeReducer from "../store";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { FaTrashAlt } from "react-icons/fa";
import { HiReceiptRefund } from "react-icons/hi";
import { ImTerminal } from "react-icons/im";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()
	 let length=store.todos.length+store.singleplanet.length+store.singlevehicle.length
     let empty="flex"
	if(length!==0){
		empty="none"
	}
	
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img classname="imgNav" style={{width:"40px"}}  src="https://tse4.mm.bing.net/th?id=OIP.Z32JfxBYk_YvF6wGJDxpcgHaHa&pid=Api&P=0&h=180" alt="" />
				</Link>
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites {store.todos.length+store.singleplanet.length+store.singlevehicle.length}
					</button>
					<ul className="dropdown-menu">
						
			        	<li className="empty" style={{display:`${empty}`}}>EMPTY </li>
						{ 
							store.todos.map((item, index) => {
									
								return (
									<div className="nav" key={item.uid}>
										
										<li key={item.uid}><Link to={"/single/" +item.uid+'people'}> 
										
							  {item.properties?.name}
							</Link></li>
										<FaTrashAlt onClick={() => {dispatch({ type: 'delete_favorite_people', value: store.todos.filter((peop, i) => i !== index) });dispatch({ type: 'change_display',index: item.uid-1, value: "hidden" })}} />
									</div>
								)
							})

						}
						{
							store.singleplanet.map((item, index) => {
						
								return (
									<div className="nav" key={index}>
										<li key={item.uid}><Link to={"/single/" + item.uid+'planet'}> 
							  {item.properties.name}
							</Link></li>
										<FaTrashAlt onClick={() => {dispatch({ type: 'delete_favorite_planet', value: store.singleplanet.filter((peop, i) => i !== index) });dispatch({ type: 'change_displayP',index: item.uid-1, value: "hidden" })}} />
									</div>
								)
							})

						}
							{
							store.singlevehicle.map((item, index) => {
						
								return (
									<div className="nav" key={index}>
										<li key={item.uid}><Link to={"/single/" + item.uid+'vehicle'}> 
							  {item.properties.name}
							</Link></li> 
										<FaTrashAlt onClick={() => {dispatch({ type: 'delete_favorite_vehicle', value: store.singleplanet.filter((peop, i) => i !== index) });dispatch({ type: 'change_displayV',index: item.uid-1, value: "hidden" })}}/>
									</div>
								)
							})

						}
						
					</ul>
				</div>
			
			</div>
		</nav>
	);
};