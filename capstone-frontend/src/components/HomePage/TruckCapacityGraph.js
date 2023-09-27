// Importing the necessary modules for the bar chart
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const TruckCapacityGraph = ({ truckList }) => {
    // Extracting truck IDs from the truck list
    const truckIds = truckList.map(truck => truck.id);

    // Calculating the total capacity taken up by each truck
    const truckCapacities = truckList.map(truck => {
        let totalCapacityTaken = 0;

        // Iterating over each order for the truck
        truck.orders.forEach(order => {
            // Iterating over each product in the order
            order.products.forEach(product => {
                // Calculating the capacity taken up based on product size
                switch(product.size) {
                    case "SMALL":
                        totalCapacityTaken += 30;
                        break;
                    case "MEDIUM":
                        totalCapacityTaken += 50;
                        break;
                    case "LARGE":
                        totalCapacityTaken += 70;
                        break;
                    default:
                        break;
                }
            });
        });

        // Returning the total capacity taken up by the truck
        return totalCapacityTaken; 
    });

    // Defining the data structure for the bar chart
    const data = {
        labels: truckIds, // X-axis labels (truck IDs)
        datasets: [{
            label: 'Capacity Taken Up', // Label for the dataset (used in the legend)
            data: truckCapacities, // Y-axis data (capacity taken up)
            backgroundColor: 'rgba(75, 192, 192, 0.5)', // Bar colour
            borderColor: 'rgba(75, 192, 192, 1)', // Border colour for the bars
            borderWidth: 1 // Border width for the bars
        }]
    };

    // Configuration options for the bar chart
    const options = {
        scales: {
            x: {
                title: {
                    display: true, // Display the x-axis title
                    text: 'Truck' // X-axis title text
                }
            },
            y: {
                title: {
                    display: true, // Display the y-axis title
                    text: 'Capacity Taken Up' // Y-axis title text
                },
                ticks: {
                    beginAtZero: true  // Ensure y-axis starts at 0
                }
            }
        },
        plugins: {
            legend: {
                display: false // Hide the legend
            }
        }
    };

    // Rendering the bar chart with the provided data and options
    return (
        <div>
            <Bar data={data} options={options} />
        </div>
    );
}

export default TruckCapacityGraph;
