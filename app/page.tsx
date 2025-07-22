
import UserPresentationSection from "@/components/user-presentation/user-presentation-section";
import MainTechnologiesSection from "@/components/tecnologies/main-technologies-section";
import EmploymentSection from "@/components/employment/employment-section";


export default function Home() {
  return (
    <div>
        <UserPresentationSection/>
        <EmploymentSection/>
        <MainTechnologiesSection/>
    </div>
  );
}
