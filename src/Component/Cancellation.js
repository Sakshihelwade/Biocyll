import React from 'react';

const Cancellation = () => {
    return (
        <div className="container my-5 p-4 border rounded shadow-sm bg-light custom-font">
            <h1 className="text-center mb-4">E-commerce Order Cancellation Policy</h1>
            <p className="mb-3">
                At Biocyll Laboratories Pvt. Ltd., our priority is to ensure a smooth and satisfying shopping experience for all our customers. We recognize that there may be instances when you need to cancel an order. This policy provides a clear framework for how order cancellations are handled at Biocyll Laboratories Pvt. Ltd.
            </p>
            <p className="fw-bold">Cancellation Period:</p>
            <p className="mb-3">
                You are allowed to cancel your order within 48 hours (2 days) of placing it. During this period, you can cancel your order without facing any additional fees.
            </p>
            <p className="fw-bold">How to Cancel Your Order:</p>
            <p className="mb-3">
                To cancel your order within the allowed timeframe, please follow these steps:
            </p>
            <ol className="mb-3">
                <li>Reach out to our customer service team through any of the following methods:</li>
                <ul>
                    <li>Phone: +91</li>
                    <li>Email: <a href="mailto:customerservices@biocyll.com">customerservices@biocyll.com</a></li>
                </ul>
                <li>Provide the following information:</li>
                <ul>
                    <li>Your order number</li>
                    <li>The reason for the cancellation</li>
                </ul>
                <li>Our customer service team will guide you through the cancellation process and provide any necessary details.</li>
            </ol>
            <p className="fw-bold">Cancellation After the Allowed Period:</p>
            <p className="mb-3">
                If you request a cancellation after the 48-hour window, there may be additional fees or conditions. Our customer service team will evaluate your request on an individual basis and inform you of any applicable charges or restrictions.
            </p>
            <p className="fw-bold">Refund Process:</p>
            <p className="mb-3">
                If your order is eligible for cancellation and payment has already been made, we will begin the refund process. The refund will be credited back to the original payment method used during the purchase. Please note that depending on your financial institution, it may take up to 7 business days for the refund to reflect in your account.
            </p>
            <p className="fw-bold">Policy Updates:</p>
            <p className="mb-3">
                Biocyll Laboratories Pvt. Ltd. reserves the right to change or update this cancellation policy at any time. Any modifications will take effect immediately upon being posted on our website. We suggest reviewing this policy periodically to stay updated on any changes.
            </p>
            <p className="mb-3">
                For further assistance or inquiries about our e-commerce order cancellation policy, please contact our customer service team:
            </p>
            <p className="mb-0">
                Phone: +91 97172 22026 <br />
                Email: <a href="mailto:customerservices@biocyll.com">customerservices@biocyll.com</a>
            </p>
            <p className="mt-4 text-center">Thank you for shopping with Biocyll Laboratories Pvt. Ltd.</p>
        </div>
    );
}

export default Cancellation;
