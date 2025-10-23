import { AboutSection, GallerySection } from "@/components";

export default function Home() {
  const sections = [
    {
      id: "sect-about",
      title: "About",
      content: <AboutSection key="sect-about" />,
    },

    {
      id: "sect-gallery",
      title: "Gallery",
      content: <GallerySection key="sect-gallery" />,
    },
  ];
  return <>{sections.map((section) => section.content)}</>;
}
