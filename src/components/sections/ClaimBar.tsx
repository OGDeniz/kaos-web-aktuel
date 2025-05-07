type ClaimBarProps = {
    text: string
};
export default function ClaimBar({ text }: { text: string }) {
    return (
        <div className="bg-beige text-primary border-b-2 border-primary py-2 text-sm uppercase font-semibold tracking-wide text-center shadow">
            {text}
        </div>
    );
}
