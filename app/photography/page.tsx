import type { Metadata } from "next";
import PhotographyGallery from "./PhotographyGallery";

export const metadata: Metadata = {
  title: "Photography | Xiayang Lin",
  description: "Selected sports, documentary, nature and travel photography by Xiayang Lin.",
};

export default function PhotographyPage() {
  return (
    <main className="photography-page">
      <header className="site-header">
        <a className="wordmark" href="/" aria-label="Xiayang Lin, home">
          <span className="wordmark-main">XL<i>.</i></span>
          <span className="wordmark-note">Yes, my initials. Not a jersey size.</span>
        </a>
        <nav aria-label="Photography navigation">
          <a href="/">Portfolio</a>
          <a href="/#work">Work</a>
          <a href="/#contact">Contact</a>
        </nav>
        <a className="header-cta" href="/Xiayang_Lin_Sports_Media_CV.pdf" download>Download CV</a>
      </header>

      <section className="archive-intro">
        <p className="eyebrow">Photography archive / 2026</p>
        <h1>Life in<br /><span>motion.</span></h1>
        <p>Sports, documentary, nature and travel photography—collected through movement, observation and life on the road.</p>
      </section>

      <section className="archive-content">
        <PhotographyGallery />
      </section>
    </main>
  );
}
