const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">

        <div className="row align-items-center justify-content-center">
          <div className="m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img src="static/img/about-me.png" title="About-me" alt="Image Daniel Luz" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>Sur moi.</h3>
              </div>
              <div className="about-text">
                <h3>
                  Je suis un développeur JavaScript full stack passionné par la création de solutions technologiques innovantes.
                </h3>
                <p>
                  Ces dernières années, je me suis concentré sur l'amélioration de mes compétences en développement web, notamment dans les frameworks Angular, React et Node.JS.
                </p>
                <p>
                  Mon parcours a débuté dans la création publicitaire, où j'ai travaillé comme assistant de création, contribuant à des campagnes pour différentes marques. Cette expérience a éveillé mon intérêt pour le développement Front-End.
                </p>
                <p>
                  Récemment, j'ai travaillé sur des projets stimulants avec l'équipe de développement du client INCRA.GOV chez Mirante Tecnologia, mettant à profit mes compétences de développeur full stack JavaScript.
                </p>
                <p>
                  En dehors du développement, j'aime partager mes connaissances en enseignant le design et le développement web dans des établissements d'enseignement.
                </p>
                <p>
                  Mon objectif est de continuer à apprendre et à évoluer dans le domaine de la technologie, en recherchant constamment de nouveaux défis et opportunités.
                </p>
                <p>
                  Si vous recherchez un professionnel dévoué, passionné et polyvalent, je suis ouvert à de nouvelles connexions et opportunités de collaboration. Mettons-nous en contact et explorons ensemble de nouvelles possibilités !
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="separated" />
        <section
          id="education"
          data-nav-tooltip="Education"
          className="pp-section section counter"
        >
          <div className="title">
            <h3>Éducation & Compéttences</h3>
          </div>
          <div className="row">
            <div className="col-lg-4 m-15px-tb">
              <ul className="aducation-box">
                <li>
                  <span>2013-2015</span>
                  <h6>PRODUCTION MULTIMÉDIA</h6>
                  <p>Collège Senac, RS, Brésil</p>
                </li>
                <li>
                  <span>2007-2008</span>
                  <h6>TECHNICIEN WEB DESIGN</h6>
                  <p>SENAI, RS, Brésil</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-7 ml-auto m-15px-tb">
              <div className="skills-box">
                <p>
                  Mon expertise en développement Front-End se concentre sur la réactivité et le design responsive. Je suis passionné par la création d'interfaces web qui s'adaptent parfaitement à tous les appareils et tailles d'écran. Grâce à cette approche, je m'assure que mes projets offrent une expérience utilisateur fluide et agréable, quels que soient les dispositifs utilisés par les utilisateurs.
                </p>
                <h3>Technique</h3>
                <div className="skill-lt">
                  <h6>HTML 5</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "95%" }}>
                      <span data-toggle="tooltip" title="952%" />
                    </div>
                  </div>
                </div>
                {/* /skill */}
                <div className="skill-lt">
                  <h6>CSS 3</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "90%" }}>
                      <span data-toggle="tooltip" title="90%" />
                    </div>
                  </div>
                </div>
                {/* /skill */}
                <div className="skill-lt">
                  <h6>JavaScript</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "85%" }}>
                      <span data-toggle="tooltip" title="85%" />
                    </div>
                  </div>
                </div>
                {/* /skill */}
                <div className="skill-lt">
                  <h6>Angular</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "85%" }}>
                      <span data-toggle="tooltip" title="85%" />
                    </div>
                  </div>
                </div>
                {/* /skill */}
                <div className="skill-lt">
                  <h6>React.js</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "75%" }}>
                      <span data-toggle="tooltip" title="75%" />
                    </div>
                  </div>
                </div>
                {/* /skill */}
                <div className="skill-lt">
                  <h6>Node.js</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "50%" }}>
                      <span data-toggle="tooltip" title="50%" />
                    </div>
                  </div>
                </div>
                {/* /skill */}
                <div className="skill-lt">
                  <h6>Bootstrap</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "80%" }}>
                      <span data-toggle="tooltip" title="80%" />
                    </div>
                  </div>
                </div>
                {/* /skill */}
                <div className="skill-lt">
                  <h6>Sass/SCSS</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "80%" }}>
                      <span data-toggle="tooltip" title="80%" />
                    </div>
                  </div>
                </div>
                {/* /skill */}
                <div className="skill-lt">
                  <h6>Less</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "60%" }}>
                      <span data-toggle="tooltip" title="60%" />
                    </div>
                  </div>
                </div>
                {/* /skill */}
              </div>
            </div>
          </div>
        </section>
        <div className="separated" />
        <section 
          id="experience"
          data-nav-tooltip="Experience"
          className="pp-section pp-scrollable section counter"
        >
          <div className="title">
            <h3>Expérience.</h3>
          </div>
          <div className="resume-box">
            <div className="resume-row">
              <div className="row">
                <div className="col-sm-3 col-md-3 col-xl-2">
                  <div className="rb-left">
                    <img src="static/img/mirante.png" title="" alt="" />
                  </div>
                </div>
                <div className="col-sm-9 col-md-9 col-xl-10">
                  <div className="rb-right">
                    <h6>Développeur Front-end</h6>
                    <label>Mirante Tecnologia S/A | Juin 2022 - Actuel</label>
                    <div className="rb-time">À temps plein</div>
                    <p>
                      Je travaille dans les équipes de développement et de maintenance front-end
                      des clients Barcorbrás et INCRA.GOV. Utilisation du framework Angular 8+, des
                      gardes, des services, du modèle, de l'interface, des routes, des modules, du pipe,
                      de l'intercepteur et du client http, Clean Code, Git, Code Review, Git Flow
                      versioning et la méthodologie agile Scrum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume-row">
              <div className="row">
                <div className="col-sm-3 col-md-3 col-xl-2">
                  <div className="rb-left">
                    <img src="static/img/barake.png" title="" alt="" />
                  </div>
                </div>
                <div className="col-sm-9 col-md-9 col-xl-10">
                  <div className="rb-right">
                    <h6>Front-end Developer</h6>
                    <label>Barake Digital | 2015 - 2022</label>
                    <div className="rb-time">À temps plein</div>
                    <p>
                      J'ai travaillé sur le développement Front End en utilisant Angular 12, Sass,
                      Bootstrap, Typescript et la programmation réactive avec RXJS. Toujours à la
                      recherche de réactivité et de rapidité en utilisant les meilleures pratiques pour
                      fournir des logiciels avec une évolutivité élevée et une maintenance facile.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume-row">
              <div className="row">
                <div className="col-sm-3 col-md-3 col-xl-2">
                  <div className="rb-left">
                    <img src="static/img/senac.png" title="" alt="" />
                  </div>
                </div>
                <div className="col-sm-9 col-md-9 col-xl-10">
                  <div className="rb-right">
                    <h6>Professeur Technique</h6>
                    <label>SENAC Porto Alegre | 2009 - 2014</label>
                    <div className="rb-time">À temps plein</div>
                    <p>
                      Professeur de cours dans le domaine du design dans les disciplines du
                      développement Web et du design graphique. J'ai participé en tant que
                      mentor pour les étudiants qui sont entrés dans les carrières de conception et
                      de développement Web, en dirigeant leur apprentissage et leurs tendances.
                      J'ai travaillé comme évaluateur dans plusieurs présentations de tableaux de
                      travail de conclusion de cours au SENAC/RS.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume-row">
              <div className="row">
                <div className="col-sm-3 col-md-3 col-xl-2">
                  <div className="rb-left">
                    <img src="static/img/liberdade.png" title="" alt="" />
                  </div>
                </div>
                <div className="col-sm-9 col-md-9 col-xl-10">
                  <div className="rb-right">
                    <h6>Responsable Technique</h6>
                    <label>LIBERDADE INDUSTRIE GRAPHIQUE | 2004 - 2009</label>
                    <div className="rb-time">À temps plein</div>
                    <p>
                      En tant que chef d'équipe axé sur l'amélioration de l'expérience client avec
                      un service personnalisé et l'application d'un design de qualité. Au service des
                      principales entreprises de la région, développement de supports graphiques
                      et de marketing digital. Nous avons mis en place un nouveau processus
                      d'impression offset et un nouveau flux de travail pour le service client.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume-row">
              <div className="row">
                <div className="col-sm-3 col-md-3 col-xl-2">
                  <div className="rb-left">
                    <img src="static/img/rocket.png" title="" alt="" />
                  </div>
                </div>
                <div className="col-sm-9 col-md-9 col-xl-10">
                  <div className="rb-right">
                    <h6>Assistante de Création</h6>
                    <label>ATUAÇÃO AGENCE DE PUBLICITÉ | 1998 - 2004</label>
                    <div className="rb-time">Estagiario</div>
                    <p>
                      En tant qu'assistante créative, développe la conception de campagnes pour
                      plusieurs entreprises telles que: STB Trip & Travel, Vinícola Santa Colina,
                      Bread`s Panificadora, Liberty Seguros, Durt Dog Eyewear et Grupo RBS.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
export default About;
