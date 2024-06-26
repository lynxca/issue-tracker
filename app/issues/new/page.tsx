import dynamic from "next/dynamic";
import IssueFormSkeleton from "../_components/IssueFormSkeleton";
import delay from "delay";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});
function NewIssuePage() {
  return <IssueForm />;
}

export default NewIssuePage;
