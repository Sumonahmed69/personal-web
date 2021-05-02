
import React from "react";
import Particles from "react-particles-js"
import ParticlesConfig from "./Particle-config";

export default function ParticleBackground() {
    return (
        <section>
            
            <Particles params={ParticlesConfig}></Particles>
            
        </section>

    );
}
