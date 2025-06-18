import { useEffect, useState } from 'react';

export default function App() {
    const [message, setMessage] = useState('');

    const API_URL = 'http://localhost:8080';

    useEffect(() => {
        fetch(`${API_URL}/api/message`)
            .then((res) => {
                if (!res.ok) throw new Error('Network response was not ok');
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setMessage(data.message);
            })
            .catch((err) => {
                console.error('Fetch error:', err);
                setMessage('Error fetching message.');
            });
    }, []);

    return (
        <div>
            <h1>{message || 'Loading...'}</h1>
        </div>
    );
}
