import AnimalProfile from "@/components/animal-profile";
import WithNavbarAndFooter from "@/HOC/WithNavbarAndFooter";

// Datos de ejemplo - en producción vendrían de una API
const sampleAnimal = {
  id: "1",
  name: "Luna",
  story:
    "Luna llegó a nuestro refugio después de ser encontrada en las calles, desnutrida y asustada. A pesar de su difícil pasado, ha demostrado ser una perrita increíblemente cariñosa y resiliente. Le encanta jugar con pelotas de tenis y siempre está lista para dar amor incondicional. Luna busca una familia que le brinde la estabilidad y el cariño que se merece.",
  age: "2 años",
  breed: "Mestiza (Labrador mix)",
  gender: "Hembra",
  size: "Mediano (18kg)",
  location: "Refugio Esperanza Animal, Bogotá",
  healthStatus: "Excelente",
  vaccinations: [
    "Vacuna múltiple (DHPP)",
    "Vacuna antirrábica",
    "Desparasitación completa",
    "Esterilizada",
  ],
  personality: [
    "Cariñosa",
    "Juguetona",
    "Sociable",
    "Inteligente",
    "Leal",
    "Energética",
  ],
  specialNeeds:
    "Luna necesita ejercicio diario y socialización continua. Se recomienda una familia activa que pueda dedicarle tiempo para paseos y juegos.",
  images: [
    "/golden-retriever-mix-dog-sitting-in-grass-looking-.png",
    "/golden-retriever-mix-dog-playing-with-ball.png",
    "/golden-retriever-mix-dog-sleeping-peacefully.png",
    "/golden-retriever-mix-dog-with-veterinarian.png",
    "/golden-retriever-mix-dog-eating-treats.png",
    "/golden-retriever-mix-dog-running-in-park.png",
  ],
  contactInfo: {
    shelter: "Refugio Esperanza Animal",
    phone: "+57 301 234 5678",
    email: "adopciones@esperanzaanimal.org",
  },
};

export default function AnimalPage({ params }) {
  return (
    <WithNavbarAndFooter>
      <AnimalProfile animal={sampleAnimal} />
    </WithNavbarAndFooter>
  );
}
