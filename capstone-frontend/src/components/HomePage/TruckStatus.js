import Truck from "./Truck"

const TruckStatus = ({truckList}) => {

    const mappedTrucks = truckList.map((truck) => {
        return <Truck truck={truck} />
        
    })
   
    
    return (
        <>
        {mappedTrucks}
        </>
    )
        

}

export default TruckStatus;