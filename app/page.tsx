
import UserPresentationSection from "@/components/user-presentation/user-presentation-section";
import MainTechnologiesSection from "@/components/tecnologies/main-technologies-section";
import EmploymentSection from "@/components/employment/employment-section";
import UserProjectsSection from "@/components/user-projects/user-projects-section";
import WorkProjectsSection from "@/components/user-projects/work-projects-section";


export default function Home() {
  return (
    <div>
        <UserPresentationSection/>
        <EmploymentSection/>
        <WorkProjectsSection/>
        <UserProjectsSection/>
        <MainTechnologiesSection/>
    </div>
  );
}
