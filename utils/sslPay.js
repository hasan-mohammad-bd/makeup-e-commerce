import { toast } from "react-toastify";
import getToken from "./getToken";

/**
 * The function `handleSSLOrderPayLater` is an asynchronous function that sends a request to a server
 * to initiate an online payment process and redirects the user to the payment gateway page if
 * successful.
 * @param orderId - The `orderId` parameter is the unique identifier for the order that needs to be
 * processed for SSL payment.
 */
const handleSSLOrderPayLater = async (orderId) => {
  try {
    const res = await fetch(`/api/payments/sslcz/${orderId}`, {
      headers: {
        authorization: `Bearer ${getToken()}`,
      },
    });
    const data = await res.json();
    // console.log(data);
    if (data?.GatewayPageURL) {
      toast.success("Online payment is processing please wait");
      window.location.replace(data.GatewayPageURL);
    } else {
      toast.error("Something went wrong");
    }
  } catch (error) {
    toast.error("Something went wrong...", error);
  }
};

export default handleSSLOrderPayLater;
