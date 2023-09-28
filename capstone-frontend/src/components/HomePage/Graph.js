import Chart from 'chart.js/auto';
import 'chart.js/auto';
import {Doughnut} from 'react-chartjs-2';

const Graph = ({orderList}) => {

    const calculateOrderStatus = (findStatus) => {

        let count = 0;
         const mappedOrderList = orderList.map ((order) => {
            if(order.status === findStatus){
                count += 1;
            }
         })
         return count;
    }

    const data = {
        labels: [
          'ONGOING',
          'FINISHED',
          'UNFULFILLED'
        ],
        datasets: [{
          label: 'Order Status',
          data: [calculateOrderStatus("ONGOING"), calculateOrderStatus("FINISHED"), calculateOrderStatus("UNFULFILLED")],
          backgroundColor: [
            '#D9D9D9',
            '#A9B47A',
            '#FF8A61'
          ],
          hoverOffset: 4
        }]
      };


    const config = {
        type: 'doughnut',
        data: data,
      };



    return (
       <div> <Doughnut data={config.data}/> </div>
    )


}

export default Graph;