export default function ColorPreview() {
    return (
        <div className="p-6 space-y-2">
            <h1 className="text-2xl font-bold mb-4">🎨 Tailwind Custom Color Grid</h1>

            <div className="bg-primary text-white px-4 py-2 rounded shadow">bg-primary</div>
            <div className="bg-secondary text-white px-4 py-2 rounded shadow">bg-secondary</div>
            <div className="bg-dark text-white px-4 py-2 rounded shadow">bg-dark</div>
            <div className="bg-softred text-softred px-4 py-2 rounded shadow">bg-softred</div>
            <div className="bg-neutral text-white px-4 py-2 rounded shadow">bg-neutral</div>
            <div className="bg-metal text-white px-4 py-2 rounded shadow">bg-metal</div>
            <div className="bg-light text-dark px-4 py-2 rounded shadow border">bg-light</div>
            <div className="bg-beige text-dark px-4 py-2 rounded shadow border">bg-beige</div>
        </div>
    );
}
