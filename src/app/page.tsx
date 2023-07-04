import Section from './section/page';
import AboutMe from './aboutMe/page';
import ProjectsList from './projectList/page';
import MySkills from './skills/page';
import Contact from './contact/page';
import Header from './header/page';
import Footer from './footer/page';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Section />
        <AboutMe />
        <ProjectsList />
        <MySkills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
