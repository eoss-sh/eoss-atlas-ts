import React from "react";


type TwoColumnProps = {
    title: string
    subtitle: string
    children: React.ReactNode
}

const TwoColumn = ({ title, subtitle, children}: TwoColumnProps) => {
    return (
        <section className="flex container mx-auto pt-12">
            <div className="w-1/4">
                <h3>{subtitle}</h3>
            </div>
            <div className="w-3/4">
                <h3>{title}</h3>
                {children}
            </div>
        </section>
    )
}

export default TwoColumn;