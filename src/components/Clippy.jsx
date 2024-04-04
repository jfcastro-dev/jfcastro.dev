import { ClippyProvider } from '@react95/clippy';
import { AGENTS } from '@react95/clippy';

export const Clippy = () => {
    return (
        <ClippyProvider agentName={AGENTS.CLIPPY}>
            <div/>
        </ClippyProvider>
    );
};