import React from 'react';
import dynamic from 'next/dynamic';

const PortadaClient = dynamic(() => import('./Portada.client'), { ssr: false });

export default function PortadaServer() {
  return (
    <PortadaClient
      title="Cuidamos la Salud de tus Amigos"
      subtitle="Soluciones veterinarias innovadoras para el bienestar y la vitalidad."
      images={[
        { src: 'https://placehold.co/400x300/F5F5F5/008556?text=Mascota%20Feliz%201', alt: 'Mascota sana' },
        { src: 'https://placehold.co/400x300/F5F5F5/1226aa?text=Investigacion%20Vet', alt: 'Investigación veterinaria' }
      ]}
      primaryColor="#008556"
      secondaryColor="#1226aa"
    />
  );
}
