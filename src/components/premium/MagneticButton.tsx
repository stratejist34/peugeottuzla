import React from 'react';

interface ShimmerButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const ShimmerButton: React.FC<ShimmerButtonProps> = ({ children, className = '', onClick }) => {
    return (
        <div
            className={`shimmer-wrap inline-block cursor-pointer ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default ShimmerButton;
