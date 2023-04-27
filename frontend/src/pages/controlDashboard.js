
import ActiveCustomerTagComponent from '../components/activeCustomerTagComponent';
import AddValetCustomer from '../components/addValetCustomerForm';
import { useSelector} from 'react-redux'
import { Typography } from '@mui/material';

function ControlDashboard() {

  const customers = useSelector(store => store.customer.customers)

  return (
    <>

      <Typography variant="h1"> Welcome to the Bike Valet ! </Typography>

      <Typography variant="h1"> ADD NEW </Typography>

      <AddValetCustomer />
      
      <Typography variant="h1"> CURRENTLY ACTIVE : </Typography>
      
      { customers.length > 0 &&
        customers.map((c) => {
          return(
            <ActiveCustomerTagComponent customer={c}/>
          )
        })
      }

    </>

  );
}

export default ControlDashboard;
