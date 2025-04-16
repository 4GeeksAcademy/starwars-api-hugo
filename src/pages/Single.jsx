
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";  // To define prop types for this component
import useGlobalReducer from "../hooks/useGlobalReducer";  // Import a custom hook for accessing the global state
import { useEffect } from "react";


export const Single = props => {

  const { store, dispatch } = useGlobalReducer()
  const { theId } = useParams()

  const id = theId.replace('people', '')
  const idp = theId.replace('planet', '')
  const idv = theId.replace('vehicle', '')
  const singlePeople = store.people.find(people => people.uid === id);
  const singlePlanet = store.planets.find(planets => planets.uid === idp);
  const singleVehicle = store.vehicles.find(vehicles => vehicles.uid === idv);
  let url = ""
  let allThings={}
  if (theId.includes('people')) {
    url = `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${singlePeople?.uid}.jpg`
    allThings=singlePeople
  } else if (theId.includes('planet')) {
    url = "https://i.pinimg.com/474x/b0/63/59/b0635904a24f09a43e53c26bfec4c642.jpg"
    allThings=singlePlanet
  } else if (theId.includes('vehicle')) {
    url = "https://1.bp.blogspot.com/-XIialw7oa5Y/TqpdBDZ_RkI/AAAAAAAABAk/kuub8XO2ubw/s1600/naves-star-wars.jpg"
    allThings=singleVehicle
  }
  console.log(singlePlanet)
  return (
    <div className="single">
      <div className="single-container">
        <div className="single-img">
          <img className="imgSingle" src={url} />
        </div>
        <div className="description">
          <h1 className="display-4">{allThings?.properties?.name} </h1>
          <h2>{allThings?.description} </h2>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae consectetur voluptatibus similique nemo culpa? Eveniet in itaque ducimus asperiores pariatur amet soluta eum! Similique exercitationem impedit mollitia adipisci placeat. In.</p>

        </div>
      </div>
      <div className="single-properties">
        {
          Object.entries(allThings?.properties).map(([key, value]) => {
            if (key !== "created" && key!=="edited" && key!=="homeworld" && key!=="url" && key!=="name" && key!=="pilots" && key!=="films") {
                return (
                <div className="properties">
                  <table className="table">
                    <thead>
                      <tr>
                        <th clasName="tbl" scope="col" style={{color:"brown"}}>{key}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="tbl" style={{color:"brown"}}>{value}</td>
                      </tr>
                    </tbody>
                  </table>
                </div> )
              
            }
          })
        }
        
        
        
      

      </div>
    </div>

  );
};

// Use PropTypes to validate the props passed to this component, ensuring reliable behavior.
Single.propTypes = {
  // Although 'match' prop is defined here, it is not used in the component.
  // Consider removing or using it as needed.
  match: PropTypes.object
};
