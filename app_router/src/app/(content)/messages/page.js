import Messages from '@/components/Messages/Messages';

export default async function MessagesPage() {
    // const response = await fetch('http://localhost:8080/messages', {
    //     headers: {
    //         'X-ID': 'page',
    //     },
    // });
    const response = await fetch('http://localhost:8080/messages');
    const messages = await response.json();
    if (!messages || messages.length === 0) {
        return <p>No messages found</p>;
    }

    return <Messages messages={messages} />;
}
