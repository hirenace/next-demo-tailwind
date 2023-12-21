import React from 'react';

interface CenteredButtonProps {
    onClick: () => void;
    className: string;
    type: "button" | "submit" | "reset" | undefined;
    buttonText: string;
}

const CenteredButton: React.FC<CenteredButtonProps> = ({ onClick, className, type, buttonText }) => {
    return (
        <div className="flex items-center justify-center">
            <button
                onClick={onClick}
                className={className}
                type={type}
            >
                {buttonText}
            </button>
        </div>
    );
};

export default CenteredButton;