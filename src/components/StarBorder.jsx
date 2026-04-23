import "../style/StarBorder.css";

export default function StarBorder({
    as = "button",
    className = "",
    color = "white",
    speed = "6s",
    thickness = 1,
    children,
    ...rest
}) {
    const Component = as;

    return (
        <Component
            className={`star-border-container ${className}`.trim()}
            style={{
                padding: `${thickness}px 0`,
                ...rest.style,
            }}
            {...rest}
        >
            <div
                className="border-gradient-bottom"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 18%)`,
                    animationDuration: speed,
                }}
            />
            <div
                className="border-gradient-top"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 18%)`,
                    animationDuration: speed,
                }}
            />
            <div className="inner-content">{children}</div>
        </Component>
    );
}
