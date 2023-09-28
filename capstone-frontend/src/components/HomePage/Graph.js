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
          label: 'Order Count',
          data: [calculateOrderStatus("ONGOING"), calculateOrderStatus("FINISHED"), calculateOrderStatus("UNFULFILLED")],
          backgroundColor: [
            '#D9D9D9',
            '#A9B47A',
            '#FF8A61'
          ],
          hoverOffset: 4
        }]
     
      };


    const options = {
      plugins:{
          legend: {
              display: true,
              position:'right',
              },
              labels: {
                boxWidth: 40,     // Width of the color box
                fontSize: 50,     // Font size of the label text
                padding: 10       // Padding between legend entries
          }
    }};

    return (
       <div> <Doughnut data={data} options={options}/> </div>
    )


}

export default Graph;