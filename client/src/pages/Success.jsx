import {useEffect, useState} from 'react';

export default function Success() {
    const [result, setResult] = useState(null);
    const params = new URLSearchParams(window.location.search);
    const paymentKey = params.get('paymentKey');
    const orderId = params.get('orderId');
    const amount = params.get('amount');

    useEffect(() => {
        async function confirm() {
            try {
                const res = await fetch(
                    `${import.meta.env.VITE_API_BASE_URL}/api/payments/confirm`,
                    {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({paymentKey, orderId, amount: Number(amount)}),
                    }
                );
                const data = await res.json();
                setResult(data);
            } catch (e) {
                setResult({error: e.message});
            }
        }

        confirm();
    }, [paymentKey, orderId, amount]);

    if (!result) return <p>승인 요청 중...</p>;
    if (result.error || result.code)
        return (
            <div>
                <h2>결제 승인 실패</h2>
                <p>{result.message || result.error}</p>
            </div>
        );

    return (
        <div>
            <h2>결제 성공</h2>
            <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
    );
}