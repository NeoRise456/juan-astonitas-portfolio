"use server";

import UserPresentationSection from "@/components/user-presentation/user-presentation-section";
import MainTechnologiesSection from "@/components/tecnologies/main-technologies-section";
import EmploymentSection from "@/components/employment/employment-section";
import UserProjectsSection from "@/components/user-projects/user-projects-section";
import WorkProjectsSection from "@/components/user-projects/work-projects-section";


export default async function Home() {
  return (
    <div>
        <div className={`animate-fade-up animate-duration-300 animate-ease-in-out`}>
            <UserPresentationSection/>
            <EmploymentSection/>
        </div>
        <div className={`animate-fade-right animate-duration-300 animate-ease-in-out`}>
            <WorkProjectsSection/>
        </div>
        <div className={`animate-fade-right animate-duration-300 animate-ease-in-out`}>
            <UserProjectsSection/>
        </div>
        <MainTechnologiesSection/>
    </div>
  );
}
