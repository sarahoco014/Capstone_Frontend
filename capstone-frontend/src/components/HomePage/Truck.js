import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TruckStatus from './TruckStatus';

export default function Truck({truck}) {

    const calculateProductsSumSize = (orderToCalculate) => {
        let total = 0;
        orderToCalculate.products.map((product) => {
          product.size === "SMALL"
            ? (total += 3)
            : product.size === "MEDIUM"
            ? (total += 7)
            : (total += 10);
        });
        return total;
      };

    const calculateFilledTruck = () => {
        let sumOfOrdersOnTruck = 0;
        for (let j = 0; j < truck.orders.length; j++) {
          sumOfOrdersOnTruck += calculateProductsSumSize(truck.orders[j]);
        }

    }


  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" value = {truck.maxCapacity} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          calculateFilledTruck(),
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
  value: PropTypes.number.isRequired,
};

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
