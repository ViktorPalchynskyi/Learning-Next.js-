import Messages from '@/components/Messages/Messages';
import { unstable_noStore } from 'next/cache';
import { getMessages } from '../../../../lib/messages';

// export const revalidate = 5;
// export const dynamic = 'force-dynamic';

export const metadata = {
    title: 'Important messages',
    description: 'Browse our lates messages',
};

export default async function MessagesPage() {
    // unstable_noStore();
    // const response = await fetch('http://localhost:8080/messages', {
    //     next: {
    //         tags: ['msg'],
    //     },
    // });
    const messages = await getMessages();
    if (!messages || messages.length === 0) {
        return <p>No messages found</p>;
    }

    return <Messages messages={messages} />;
}
