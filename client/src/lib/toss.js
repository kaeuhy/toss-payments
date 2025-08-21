import {loadTossPayments} from "@tosspayments/tosspayments-sdk";

export async function loadWidget() {
    const clientKey = import.meta.env.VITE_TOSS_CLIENT_KEY;
    return await loadTossPayments(clientKey);
}