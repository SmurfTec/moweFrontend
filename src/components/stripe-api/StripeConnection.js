import {Elements, PaymentElement, useElements, useStripe} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const StripeConnection = () => {
const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
    };

    const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/",
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
    }
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <form onSubmit={handleSubmit}>
        <PaymentElement />
        <button>Submit</button>
        </form>
    </Elements>
  )
}

export default StripeConnection