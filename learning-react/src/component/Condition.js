


function Garage(props){
    const cars =props.cars;

    return(
        <>
            <h1>Garage</h1>
            {cars.length > 0 &&
                <h2>
                    you have {cars.length} cars in your Garage.
                </h2>
            }
        </>
    )
}

export default Garage;