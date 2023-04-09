import Link from "next/link";
import Section from "./section/page";
import AboutMe from "./aboutMe/page";
import ProjectsList from "./projectList/page";
import MySkills from "./skills/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <>
      <Section />
      <AboutMe />
      <ProjectsList />
      <MySkills />
      <Contact />
    </>
  )
}
