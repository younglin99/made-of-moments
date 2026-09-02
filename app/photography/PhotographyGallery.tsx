"use client";

import { useEffect, useMemo, useState } from "react";

type GalleryItem = {
  src: string;
  alt: string;
  portrait?: boolean;
  video?: boolean;
};

const sports: GalleryItem[] = [
  { src: "/media/photography/sports/skateboarding-cardiff-night.webp", alt: "Skateboarder performing a trick outside Cardiff Central at night" },
  { src: "/media/photography/sports/basketball-match-jump-shot.webp", alt: "Jump shot during a university basketball match" },
  { src: "/media/photography/sports/sports-portrait.webp", alt: "Portrait of a skateboarder holding a board", portrait: true },
  { src: "/media/photography/sports/skateboarding-cardiff-day.webp", alt: "Skateboarder and board suspended in mid-air" },
  { src: "/media/photography/sports/basketball-match-layup.webp", alt: "Player reaching towards the hoop for a layup" },
  { src: "/media/photography/sports/skateboarding-night.webp", alt: "Skateboarder moving beneath a floodlight", portrait: true },
  { src: "/media/photography/sports/street-football.webp", alt: "Children playing football in a neighbourhood street", portrait: true },
];

const makeNumberedPhotos = (folder: string, total: number, portraits: number[], label: string): GalleryItem[] =>
  Array.from({ length: total }, (_, index) => {
    const number = index + 1;
    return {
      src: `/media/photography/${folder}/${folder}-${number}.webp`,
      alt: `${label} photograph ${number}`,
      portrait: portraits.includes(number),
    };
  });

const groups: Record<string, GalleryItem[]> = {
  Sports: sports,
  Documentary: makeNumberedPhotos("documentary", 15, [3, 4, 5, 7, 12], "Documentary"),
  Nature: [
    ...makeNumberedPhotos("nature", 19, [2, 4, 7, 8, 12, 13, 15], "Nature"),
    { src: "/media/photography/nature/snow-1.mp4", alt: "Snowfall in a dark woodland", video: true, portrait: true },
    { src: "/media/photography/nature/snow-2.mp4", alt: "Snow falling through trees", video: true, portrait: true },
  ],
  Travel: makeNumberedPhotos("travel", 7, [1, 3, 4, 5, 6], "Travel"),
};

const categories = Object.keys(groups);

export default function PhotographyGallery() {
  const [category, setCategory] = useState("Sports");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const items = useMemo(() => groups[category], [category]);
  const selected = selectedIndex === null ? null : items[selectedIndex];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowRight") setSelectedIndex((selectedIndex + 1) % items.length);
      if (event.key === "ArrowLeft") setSelectedIndex((selectedIndex - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [items, selectedIndex]);

  const changeCategory = (nextCategory: string) => {
    setCategory(nextCategory);
    setSelectedIndex(null);
  };

  return (
    <>
      <div className="gallery-tabs" role="tablist" aria-label="Photography categories">
        {categories.map((name) => (
          <button
            className={category === name ? "active" : ""}
            key={name}
            onClick={() => changeCategory(name)}
            role="tab"
            aria-selected={category === name}
          >
            {name}<span>{groups[name].length}</span>
          </button>
        ))}
      </div>

      <div className="archive-grid" role="tabpanel" aria-label={`${category} photography`}>
        {items.map((item, index) => (
          <figure className={item.portrait ? "portrait" : ""} key={item.src}>
            {item.video ? (
              <video controls playsInline preload="metadata" aria-label={item.alt}>
                <source src={item.src} type="video/mp4" />
              </video>
            ) : (
              <button onClick={() => setSelectedIndex(index)} aria-label={`Enlarge: ${item.alt}`}>
                <img src={item.src} alt={item.alt} loading="lazy" />
              </button>
            )}
          </figure>
        ))}
      </div>

      {selected && !selected.video && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Enlarged photograph" onClick={() => setSelectedIndex(null)}>
          <button className="lightbox-close" onClick={() => setSelectedIndex(null)} aria-label="Close">×</button>
          <button className="lightbox-nav previous" onClick={(event) => { event.stopPropagation(); setSelectedIndex((selectedIndex! - 1 + items.length) % items.length); }} aria-label="Previous photograph">‹</button>
          <img src={selected.src} alt={selected.alt} onClick={(event) => event.stopPropagation()} />
          <button className="lightbox-nav next" onClick={(event) => { event.stopPropagation(); setSelectedIndex((selectedIndex! + 1) % items.length); }} aria-label="Next photograph">›</button>
        </div>
      )}
    </>
  );
}
