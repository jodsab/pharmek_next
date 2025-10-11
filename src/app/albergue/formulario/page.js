import SubmissionForm from "@/components/submission-form";
import WithNavbarAndFooter from "@/HOC/WithNavbarAndFooter";

export default function FormularioPage() {
  return (
    <WithNavbarAndFooter>
      <SubmissionForm />
    </WithNavbarAndFooter>
  );
}
