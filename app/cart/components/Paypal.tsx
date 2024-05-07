import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useState } from "react";
import axios from 'axios';

export default function Paypal({ data, setData }: {
    data: {
        name: string;
        zipCode: string;
        country: string;
        email: string;
        adress: string;
        tel: string;
    },
    setData: React.Dispatch<React.SetStateAction<{
        name: string;
        zipCode: string;
        country: string;
        email: string;
        adress: string;
        tel: string;
    }>>
}) {

    const initialOptions = {
        clientId: 'test',
        currency: "USD",
        components: "buttons",
    };

    const createOrder = async (): Promise<string> => {
        try {
            const { data: orderData } = await axios.post('/api/createOrder', {
                ...data
            });

            if (orderData.id) {
                console.log('IMA ORDER DEJTA', orderData)
                return orderData.id;
            } else {
                const errorDetail = orderData.details?.[0];
                const errorMessage = errorDetail
                    //@ts-ignore
                    ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
                    : JSON.stringify(orderData);

                throw new Error(errorMessage);
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    const onApprove = async (data: any, actions: any) => {
        try {
            const da = await axios.post(`/api/${data.orderID}/capturePayment`);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className=' px-8 left-0 bottom-2 flex flex-col gap-2 w-full mt-auto -mb-6' >
            <div className="flex flex-col w-full item-center gap-1 justify-center text-gray-500 ">
                <div className="w-full  border-gray-200 pb-2 flex justify-between items-center">
                    <p>Shipping</p>
                    <p>50$</p>
                </div>
                <div className="w-full border-b-2 border-gray-300 flex justify-between items-center pb-2">
                    <p>Ukupno</p>
                    <p>400$</p>
                </div>
            </div>
            <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons className="w-full sticky " style={{

                    shape: 'rect'
                }} createOrder={createOrder} onApprove={onApprove} />
            </PayPalScriptProvider>
            <div className='fixed top-1/2'>

            </div>
        </div>
    );
}
