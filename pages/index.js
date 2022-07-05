import Head from "next/head";
import Image from "next/image";
import SectionSlider from "../components/Section/slider";
import SectionAbout from "../components/Section/about";
import Footer from "../components/Footer/footer";
import SectionCourses from "../components/Section/course";
import SectionTeachers from "../components/Section/teachers";
import SectionTest from "../components/Section/test";

export default function Home() {
  return (
    <>
      <SectionSlider />
      <SectionAbout />
      <SectionCourses />
      <SectionTeachers />
      <SectionTest />
      <Footer />
    </>
  );
}
