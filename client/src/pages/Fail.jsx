export default function Fail() {
    const params = new URLSearchParams(window.location.search);
    const message = params.get('message');
    const code = params.get('code');
    return (
        <div>
            <h2>결제 실패</h2>
            <p>{message}</p>
            <p>코드: {code}</p>
        </div>
    );
}