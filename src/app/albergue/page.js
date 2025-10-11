import AnimalsGallery from "@/components/animals-gallery";
import WithNavbarAndFooter from "@/HOC/WithNavbarAndFooter";

export default function AlberguePage() {
  return (
    <WithNavbarAndFooter>
      <AnimalsGallery />
    </WithNavbarAndFooter>
  );
}
