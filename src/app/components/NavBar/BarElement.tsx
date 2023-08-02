interface BarElementProps {
    label: string;
    href: string;
}

const BarElement:React.FC<BarElementProps> = ({label, href}) => {
    return (
        <a href={href} className="text-rose-700 text-xl hover:text-rose-600">
            {label}
        </a>
    )
}

export default BarElement;