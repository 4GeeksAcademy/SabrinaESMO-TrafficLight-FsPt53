import React from "react";
import { useState } from "react";

const Lights = () => {
    const [lightOn, setLightOn] = useState(null);
    const [purpleLight, setPurpleLight] = useState([]);

    const handleLightClick = (light) => {
        if (lightOn === light) {
            setLightOn(null);
        } else {
            setLightOn(light);
        }
    };

    const handlePurpleClick = () => {
        const key = `purple-${purpleLight.length + 1}`;
        setPurpleLight([...purpleLight, key]);
    };

    return (
        <div>
            <div className="container">
                <div
                    onClick={() => handleLightClick('red')}
                    className={`luzRoja ${lightOn === 'red' ? 'on' : 'off'}`}
                ></div>
                <div
                    onClick={() => handleLightClick('amber')}
                    className={`luzAmbar ${lightOn === 'amber' ? 'on' : 'off'}`}
                ></div>
                <div
                    onClick={() => handleLightClick('green')}
                    className={`luzVerde ${lightOn === 'green' ? 'on' : 'off'}`}
                ></div>
                {purpleLight.map((key) => (
                    <div key={key} onClick={() => handleLightClick('purple')}
                        className={`luzLila ${lightOn === 'purple' ? 'on' : 'off'}`}>

                    </div>
                ))}
            </div>
            <button onClick={handlePurpleClick}></button>

        </div>
    );
};

export default Lights;

