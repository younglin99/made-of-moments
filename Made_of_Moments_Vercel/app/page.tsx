const newsProjects = [
  {
    title: "English–Chinese News Video",
    meta: "Cover Media · Remote / London · 2025",
    copy: "Translated, checked and published short news videos for Chinese-speaking audiences.",
    index: "6–10",
    indexLabel: "videos per day",
  },
  {
    title: "Wochit Short-form Production",
    meta: "Cover Media · Approx. 1 minute",
    copy: "Selected library footage and matched visuals to supplied news copy for newly assembled stories.",
    index: "01:00",
    indexLabel: "typical runtime",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Xiayang Lin, home">
          <span className="wordmark-main">XL<i>.</i></span>
          <span className="wordmark-note">Yes, my initials. Not a jersey size.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#videography">Videography</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="/Xiayang_Lin_Sports_Media_CV.pdf" download>
          Download CV
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            Football media · Video production · Editorial
          </p>
          <h1>
            Made of
            <br />
            <span>moments.</span>
          </h1>
          <p className="hero-intro">
            I’m Xiayang Lin, a video editor and content producer interested in
            how sport becomes a story through images, sound and the moments
            around the game. My experience spans international football
            television, live production and short-form news video.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              View selected work <ArrowIcon />
            </a>
            <a className="text-link" href="mailto:younglin99@outlook.com">
              younglin99@outlook.com
            </a>
          </div>
        </div>

        <div className="hero-scoreboard" aria-label="Professional highlights">
          <div className="scoreboard-top">
            <span>Based near Leiden, NL</span>
            <span>Available for opportunities</span>
          </div>
          <div className="scoreboard-number">100+</div>
          <p>English-language football promos edited for broadcast</p>
          <div className="pitch-lines" aria-hidden="true">
            <span className="centre-circle" />
            <span className="penalty-box top" />
            <span className="penalty-box bottom" />
          </div>
          <div className="scoreboard-bottom">
            <span>Broadcast</span>
            <span>Live production</span>
            <span>Short-form</span>
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="Areas of expertise">
        <div>
          <span>Football content</span><i>◆</i>
          <span>Video editing</span><i>◆</i>
          <span>Live production</span><i>◆</i>
          <span>International journalism</span><i>◆</i>
          <span>English–Chinese content</span>
        </div>
      </section>

      <section className="section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected work / 01</p>
          <h2>Football Content</h2>
          <p>
            English-language broadcast work made for international audiences,
            spanning match promotion, weekly programming and live production.
          </p>
        </div>

        <article className="promo-series">
          <div className="promo-series-intro">
            <div>
              <p className="project-meta">StarTimes · Bundesliga · 2025</p>
              <h3>Der Klassiker: Two Seasons</h3>
            </div>
            <div>
              <p>
                Two 30-second television promos for Bayern Munich vs Borussia
                Dortmund, conceived as a seasonal pair. Vivaldi&apos;s
                <em> Spring</em> and <em>Autumn</em> give each fixture its own
                pace and atmosphere while keeping the rivalry at the centre.
              </p>
              <ul aria-label="Project skills">
                <li>Editing</li>
                <li>Footage selection</li>
                <li>Music selection</li>
                <li>Broadcast delivery</li>
              </ul>
            </div>
          </div>

          <div className="promo-films">
            <figure className="promo-film">
              <video
                controls
                controlsList="nodownload"
                playsInline
                preload="metadata"
                poster="/media/der-klassiker-spring-2025.jpg"
              >
                <source
                  src="/media/der-klassiker-spring-2025.mp4"
                  type="video/mp4"
                />
                Your browser does not support embedded video.
              </video>
              <figcaption>
                <div>
                  <span className="season-index">01 / Spring</span>
                  <strong>FC Bayern München vs Borussia Dortmund</strong>
                </div>
                <span>April 2025 · 00:30</span>
              </figcaption>
            </figure>

            <figure className="promo-film">
              <video
                controls
                controlsList="nodownload"
                playsInline
                preload="metadata"
                poster="/media/der-klassiker-autumn-2025.jpg"
              >
                <source
                  src="/media/der-klassiker-autumn-2025.mp4"
                  type="video/mp4"
                />
                Your browser does not support embedded video.
              </video>
              <figcaption>
                <div>
                  <span className="season-index">02 / Autumn</span>
                  <strong>FC Bayern München vs Borussia Dortmund</strong>
                </div>
                <span>October 2025 · 00:30</span>
              </figcaption>
            </figure>
          </div>

          <p className="rights-note">
            Broadcast portfolio work produced at StarTimes. Match footage,
            competition marks and club marks remain the property of their
            respective rights holders.
          </p>
        </article>

        <div className="production-cases">
          <article className="production-case production-case-wide">
            <div className="case-gallery weekly-gallery">
              <figure className="case-image case-image-main">
                <img
                  src="/media/production/football-moments-control-room.jpg"
                  alt="Football Moments feeds on the control-room multiview during production"
                />
                <figcaption>Control-room multiview during production</figcaption>
              </figure>
              <figure className="case-image">
                <img
                  src="/media/production/football-moments-recording.jpg"
                  alt="Football Moments presenter beside a player statistics graphic"
                />
                <figcaption>Programme recording and on-screen slides</figcaption>
              </figure>
              <figure className="case-image">
                <img
                  src="/media/production/football-moments-timeline.jpg"
                  alt="Premiere Pro timeline for a Football Moments episode"
                />
                <figcaption>Episode assembly in Premiere Pro</figcaption>
              </figure>
            </div>
            <div className="project-body case-copy">
              <p className="project-meta">02 · StarTimes · 2023–2025</p>
              <h3>Football Moments — Weekly Studio Show</h3>
              <p>
                Prepared research and programme materials, built on-screen
                slides, assembled programme sequences and handled live playout
                for weekly English-language football programming.
              </p>
              <ul aria-label="Project skills">
                <li>Editorial</li>
                <li>Premiere Pro</li>
                <li>Studio production</li>
                <li>Live playout</li>
              </ul>
            </div>
          </article>

          <article className="production-case interview-case">
            <figure className="case-image interview-image">
              <img
                src="/media/production/bundesliga-player-interview.jpg"
                alt="Remote Bundesliga player interview on a production laptop"
              />
              <figcaption>Remote interview production</figcaption>
            </figure>
            <div className="project-body case-copy">
              <p className="project-meta">03 · StarTimes · Selected assignments</p>
              <h3>Bundesliga Player Interviews</h3>
              <p>
                Research and production support for remote interviews with
                Bundesliga players, from question preparation through
                recording.
              </p>
              <ul aria-label="Project skills">
                <li>Research</li>
                <li>Question preparation</li>
                <li>Remote production</li>
              </ul>
            </div>
          </article>

          <article className="production-case live-case">
            <div className="live-gallery">
              <figure className="case-image">
                <img
                  src="/media/production/live-broadcast-multiview.jpg"
                  alt="Football match and studio feeds on a broadcast multiview"
                />
                <figcaption>Match and studio feeds</figcaption>
              </figure>
              <figure className="case-image">
                <img
                  src="/media/production/live-playout-desk.jpg"
                  alt="Live football playout desk with transmission run sheets"
                />
                <figcaption>Playout desk and run sheets</figcaption>
              </figure>
            </div>
            <div className="project-body case-copy">
              <p className="project-meta">04 · StarTimes · Live broadcast</p>
              <h3>Football Broadcast Operations</h3>
              <p>
                Worked in the control room on English-language football
                broadcasts, following rundowns, preparing playback material
                and responding to changes during transmission.
              </p>
              <ul aria-label="Project skills">
                <li>Broadcast workflow</li>
                <li>Rundowns</li>
                <li>Playback</li>
                <li>Time-critical delivery</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="section documentary" id="videography">
        <div className="section-heading">
          <p className="eyebrow">Selected work / 02</p>
          <h2>Documentary &amp; Photography</h2>
        </div>
        <div className="documentary-layout">
          <article className="feature-card">
            <a
              className="feature-frame"
              href="https://www.bilibili.com/video/BV1Qs4y187ud/"
              target="_blank"
              rel="noreferrer"
              aria-label="Watch Happy Accident on Bilibili"
            >
              <img
                src="/media/documentary/happy-accident-behind-the-scenes.jpg"
                alt="A worn skateboard deck and detached truck during the making of Happy Accident"
              />
              <span>Short documentary · 2022</span>
              <div className="play-mark" aria-hidden="true">▶</div>
              <strong className="frame-caption">Behind the scenes</strong>
            </a>
            <div className="feature-copy">
              <p className="project-meta">Producer · Director · Editor</p>
              <h3>Happy Accident</h3>
              <p>
                An independently produced documentary about skateboarding:
                contributor research, story development, interviews, filming,
                voice-over and final edit.
              </p>
              <a className="button button-outline" href="https://www.bilibili.com/video/BV1Qs4y187ud/" target="_blank" rel="noreferrer">
                Watch film <ArrowIcon />
              </a>
            </div>
          </article>

          <article className="photo-card">
            <div className="photo-mosaic">
              <figure>
                <img
                  src="/media/basketball/match-photography-drive.jpg"
                  alt="A university basketball player driving towards the basket"
                />
              </figure>
              <figure>
                <img
                  src="/media/basketball/match-photography-layup.jpg"
                  alt="A university basketball player attempting a layup"
                />
              </figure>
              <figure>
                <img
                  src="/media/basketball/camera-behind-the-scenes.jpg"
                  alt="Reviewing a basketball photograph on the camera screen"
                />
              </figure>
            </div>
            <p className="project-meta">University basketball · 2019–2021</p>
            <h3>Team photography &amp; match documentation</h3>
            <p>
              Attended training and matches, produced photos and video, managed
              CUBA registration and created individual photo albums for players.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-blue">
        <div className="section-heading inverse">
          <p className="eyebrow">Selected work / 03</p>
          <h2>News Video</h2>
          <p>
            Fast, accurate production across translation, visual selection,
            quality checks and online publishing.
          </p>
        </div>
        <div className="news-grid">
          {newsProjects.map((project) => (
            <article className="news-card" key={project.title}>
              <div className="news-stat">
                <strong>{project.index}</strong>
                <span>{project.indexLabel}</span>
              </div>
              <div>
                <p className="project-meta">{project.meta}</p>
                <h3>{project.title}</h3>
                <p>{project.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section travel" id="writing">
        <div className="travel-number">150,000</div>
        <div className="travel-copy">
          <p className="eyebrow">Travel writing / 2026</p>
          <h2>A journey recorded in Chinese</h2>
          <p>
            A 150,000-character travel diary based on an independent journey
            through Russia, the Caucasus, Jordan, Syria and Uzbekistan—combining
            personal narrative with observations of people, places and everyday
            life. My wider Chinese-language travel writing also includes
            Lebanon, Mongolia and earlier journeys in Europe.
          </p>
          <span className="status-label">English excerpts in preparation</span>
        </div>
      </section>

      <section className="section about" id="about">
        <div>
          <p className="eyebrow">About / 04</p>
          <h2>From the control room to the story behind the frame.</h2>
        </div>
        <div className="about-copy">
          <p>
            My work sits between editorial judgement and practical production.
            At StarTimes, I made English-language football content broadcast
            across sub-Saharan Africa. At Cover Media, I translated and produced
            short news videos for Chinese-speaking audiences.
          </p>
          <p>
            I hold an MA in International Journalism from Cardiff University,
            alongside bachelor’s degrees in Trade Economics and English
            Translation. I am a native Chinese speaker, work professionally in
            English and am currently learning Dutch.
          </p>
          <div className="skill-list">
            <span>Premiere Pro</span>
            <span>After Effects</span>
            <span>Photoshop</span>
            <span>Wochit</span>
            <span>Live playout</span>
            <span>Photography</span>
          </div>
        </div>
      </section>

      <footer id="contact">
        <p className="eyebrow">Contact / 05</p>
        <h2>Let’s make the next story worth watching.</h2>
        <div className="footer-links">
          <a href="mailto:younglin99@outlook.com">Email me <ArrowIcon /></a>
          <a href="/Xiayang_Lin_Sports_Media_CV.pdf" download>Download CV <ArrowIcon /></a>
        </div>
        <div className="footer-bottom">
          <span>Xiayang Lin · Portfolio 2026</span>
          <span>Leiden area, Netherlands</span>
        </div>
      </footer>
    </main>
  );
}
