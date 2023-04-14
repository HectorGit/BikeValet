
// import ItemCard from '../components/itemCard';
import AddValetCustomer from '../components/addValetCustomerForm';
import { useSelector} from 'react-redux'
import { Typography } from '@mui/material';

function ControlDashboard() {

  const customers = useSelector(store => store.customer.customers)

  return (
    <>

      {/* <div>
      { customers.length > 0 &&
        customers.map((c) => {
          return(
          <p key={c.tagNumber}>
            {c.name}-{c.tagNumber}-{c.phone_number}
          </p>
          )
        })
      }
      </div> */}

      <Typography variant="h1"> Welcome to the Bike Valet ! </Typography>

      <AddValetCustomer />
      
    </>

  );
}

export default ControlDashboard;
