import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';

export default function Truck({truck}) {

  const [filledCapacity, setFilledCapacity] = useState(0);

    const calculateProductsSumSize = (orderToCalculate) => {
        let total = 0;
        orderToCalculate.products.map((product) => {
          product.size === "SMALL"
            ? (total += 10)
            : product.size === "MEDIUM"
            ? (total += 15)
            : (total += 20);
        });
        return total;
      };

    const calculateFilledTruck = () => {
        let sumOfOrdersOnTruck = 0;
        for (let j = 0; j < truck.orders.length; j++) {
          sumOfOrdersOnTruck += calculateProductsSumSize(truck.orders[j]);
        }
        return sumOfOrdersOnTruck;

    }

    useEffect( () => {
      setFilledCapacity(calculateFilledTruck());
    }, [filledCapacity])


  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '30%', mr: 1}}>
        <Typography>Truck : {truck.id}</Typography>
        <LinearProgress variant="determinate" value={filledCapacity} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          (filledCapacity/truck.maxCapacity)*100
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

Truck.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  truck: PropTypes.shape({
    orders: PropTypes.arrayOf(PropTypes.object),
    maxCapacity: PropTypes.number,
    // Add other properties as needed
  }).isRequired,
};


// come back to this.
function TruckProgressBar() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <Truck value={progress} />
    </Box>
  );

  
}
