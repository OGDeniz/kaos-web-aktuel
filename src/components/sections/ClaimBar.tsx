type ClaimBarProps = {
    text: string
};

export default function ClaimBar({ text }: ClaimBarProps) {
    return (
        <div className="bg-gray-100 text-center py-2 text-sm uppercase font-semibold tracking-wide">
            {text}
        </div>
    );
}
