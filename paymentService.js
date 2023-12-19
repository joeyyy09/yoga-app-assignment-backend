// paymentService.js
const CompletePayment = async (name, selectedBatch) => {
  try {
    console.log(`Processing payment for ${name} in batch ${selectedBatch}`);

    // Dummy payment logic (replace with actual payment gateway integration in production)
    const paymentSuccessful = Math.random() < 0.8; // 80% chance of success

    if (paymentSuccessful) {
      console.log("Payment successful");
      return "Payment successful";
    } else {
      console.log("Payment failed");
      throw new Error("Payment failed. Please try again.");
    }
  } catch (error) {
    console.error("Error processing payment:", error.message);
    throw new Error("Internal server error during payment processing.");
  }
};

module.exports = { CompletePayment };
