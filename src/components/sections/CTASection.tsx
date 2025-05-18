interface CTAProps {
    label: string;
    href: string;
}

export default function CTASection({ label, href }: CTAProps) {
    return (
        <section className="py-6 flex justify-center items-center">
            <a
                href={href}
                className="bg-light text-dark font-bold px-6 py-3 rounded shadow-md hover:bg-white transition"
            >
                {label}
            </a>
        </section>
    )
}
