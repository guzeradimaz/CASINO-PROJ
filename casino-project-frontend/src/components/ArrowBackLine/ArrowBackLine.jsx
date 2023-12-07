import React from "react";
import {useNavigate} from "react-router-dom";

export const ArrowBackLine = () => {
    const nav = useNavigate();
    const handleBack = () => nav(-1);
    return (
        <div
            style={{
                width: "100%",
                height: 70,
                paddingTop: 10,
                paddingBottom: 10,
            }}
        >
            <button
                onClick={handleBack}
                style={{
                    width: 50,
                    marginLeft: 20,
                    height: 50,
                    background: "rgb(17, 17, 17)",
                    border: "none",
                    borderRadius: 100,
                    cursor: "pointer",
                }}
            >
                <img
                    style={{width: 50, height: 50}}
                    alt="imagearrowBack"
                    src="https://cdn-icons-png.flaticon.com/512/3742/3742272.png"
                />
            </button>
        </div>
    );
};
