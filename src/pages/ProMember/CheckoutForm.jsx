import { CardElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
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
        >
          Pay
        </button>
      </div>
    </form>
    </div>
  );
};
export default CheckoutForm;
