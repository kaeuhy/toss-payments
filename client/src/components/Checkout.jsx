import {useState} from 'react';
import {loadWidget} from '../lib/toss';

export default function Checkout() {
    const [loading, setLoading] = useState(false);

    const handlePay = async () => {
        setLoading(true);
        const orderId = crypto.randomUUID();
        const amount = 1500;

        const tossPayments = await loadWidget();
        const paymentWidget = tossPayments.widgets({customerKey: 'anonymous'});
        paymentWidget.renderPaymentMethods('#payment-method', {value: amount});
        paymentWidget.renderAgreement('#agreement');

        await paymentWidget.requestPayment({
            orderId,
            amount,
            orderName: '테스트 주문',
            successUrl: `${window.location.origin}/success`,
            failUrl: `${window.location.origin}/fail`,
        });
        setLoading(false);
    };

    return (
        <div>
            <h1>Toss Payments 예제</h1>
            <div id="payment-method"/>
            <div id="agreement"/>
            <button onClick={handlePay} disabled={loading}>
                {loading ? '처리 중...' : '결제하기'}
            </button>
        </div>
    );
}