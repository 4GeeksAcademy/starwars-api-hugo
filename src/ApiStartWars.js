let Url="https://www.swapi.tech/api"

export const ApiStartwars = {
    getPeople: async () => {
        try {
            const resultPeople=localStorage.getItem("getPeople")
            if(resultPeople){ 
                return JSON.parse(resultPeople)
            }
            const request = await fetch(`${Url}/people?page=1&limit=30&expanded=true`, {
                method: "GET"
            })
            const response = await request.json();
            localStorage.setItem("getPeople", JSON.stringify(response))
            return response
        } catch (error) {
            console.log(error)
            return error
        }
    },
    getPlanet: async () => {
        try {
            const resultPlanet=localStorage.getItem("getPlanet")
            if(resultPlanet){ 
                return JSON.parse(resultPlanet)
            }
            const request = await fetch(`${Url}/planets?page=1&limit=30&expanded=true`, {
                method: "GET"
            })
            const response = await request.json();
            localStorage.setItem("getPlanet", JSON.stringify(response))
            return response
        } catch (error) {
            console.log(error)
            return error
        }
    },
    getVehicles: async () => {
        try {
            const resultVehicle=localStorage.getItem("getVehicle")
            if(resultVehicle){ 
                return JSON.parse(resultVehicle)
            }
            const request = await fetch(`${Url}/vehicles?page=1&limit=30&expanded=true`, {
                method: "GET"
            })
            const response = await request.json();
            localStorage.setItem("getVehicle", JSON.stringify(response))
            return response
        } catch (error) {
            console.log(error)
            return error
        }
    }

}