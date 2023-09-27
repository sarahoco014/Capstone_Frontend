import Truck from "./Truck"

const TruckStatus = ({truckList}) => {

    const mappedTrucks = truckList.map((truck, index) => {
        return <Truck truck={truck} key={index} />
        
    })
   
    
    return (
        <>
        {mappedTrucks}
        </>
    )
        

}

export default TruckStatus;