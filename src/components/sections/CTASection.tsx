type CTAProps = {
    label: string;
    href: string;
};

export default function CTASection({ label, href }: CTAProps) {
    return (
        <section className="bg-primary text-beige py-10 text-center">
            <a
                href={href}
                className="inline-block bg-beige text-primary font-bold text-sm uppercase tracking-wide px-6 py-3 rounded hover:bg-white transition"
            >
                {label}
            </a>
        </section>
    );
}
