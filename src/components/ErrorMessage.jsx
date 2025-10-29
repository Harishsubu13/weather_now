import React from "react";

function ErrorMessage({ message }) {
    return (
        <div style={{
            marginTop: "15px",
            padding: "10px",
            borderRadius: "8px",
            background: "rgba(255, 0, 0, 0.2)",
            color: "white",
        }}
        > {message}
        </div>
    );
}

export default ErrorMessage;