import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import axiosSecure from "../../api/axiosSecure";

const CheckoutForm = () => {
  const stripe = useStripe()
  const {user} = useAuth()
  const elements = useElements()
  const [clientSecret, setClientSecret] = useState("")
  const [error, setError] = useState("")

  useEffect(()=>{
    axiosSecure.post("/create-payment-intent", {price: 25})
    .then(res=>{
      setClientSecret(res.data.clientSecret)
    
    })
  },[])
  console.log(clientSecret)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!stripe || !elements){
      return; 
    }

    const card = elements.getElement(CardElement);
    if(card===null){
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: "card",
      card
    })
    if(error){
      console.log(error)
      setError(error.message)
    } else {
      setError("")
      console.log(paymentMethod)
    }


  };
  return (
    <div className="mt-24 max-w-2xl mx-auto px-4 md:mt-0">

    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div className="text-center my-6">
        <button
          className="btn w-full  bg-gradient-to-r from-cyan-600 to-[#24962a] hover:scale-95"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </div>
      <p className="text-red-600 font-semibold">{error}</p>
    </form>
    </div>
  );
};
export default CheckoutForm;
