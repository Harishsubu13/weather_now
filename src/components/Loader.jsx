import React from "react";

function Loader() {
    return (
        <div style={{ marginTop: "20px" }}>
            <div className="spinner">
                <style>{`
                .spinner {
                border: 4px solid rgba(255,255,255,0.3);
                border-top: 4px solid white;
                border-radius: 50%;
                width: 30px;
                height: 30px;
                animation: spin 1s linear infinite;
                margin: auto;
                }
                @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
                }
                `}</style>
            </div>
        </div>
    );
}

export default Loader;