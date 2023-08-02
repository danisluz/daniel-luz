const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">

        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img src="static/img/about-me.png" title="" alt="" />
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
                  {`Je suis`} un analyste développeur front-end avec plus de 5 ans d'expérience.{" "}
                </h3>
                <p>
                  {`Mon`} expertise inclut HTML, CSS, Sass, JavaScript, TypeScript et l'utilisation de frameworks tels que Angular et React.js. Je suis constamment à la recherche de nouveaux défis et d'opportunités pour apprendre et évoluer dans le monde de la programmation web. Ensemble, rendons le web encore plus incroyable!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="separated" />
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
              <h3>Mes compétences</h3>
              <p>
                {`Je suis`} développeur front-end passionné par la création d'interfaces étonnantes, avec une connaissance approfondie de HTML, CSS, JavaScript et des frameworks modernes tels que Angular et React. Je garantis des projets visuellement attractifs, réactifs et optimisés, cherchant toujours à améliorer mes compétences pour créer des expériences captivantes et mémorables pour tous les utilisateurs.
              </p>
              <div className="skill-lt">
                <h6>HTML5</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "92%" }}>
                    <span data-toggle="tooltip" title="92%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>CSS</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "90%" }}>
                    <span data-toggle="tooltip" title="90%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Sass</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "86%" }}>
                    <span data-toggle="tooltip" title="86%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Angular</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "88%" }}>
                    <span data-toggle="tooltip" title="88%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>React.JS</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "65%" }}>
                    <span data-toggle="tooltip" title="65%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>UI/UX Design</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "80%" }}>
                    <span data-toggle="tooltip" title="80%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Java/Spring Boot</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "45%" }}>
                    <span data-toggle="tooltip" title="45%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
            </div>
          </div>
        </div>
        <div className="separated" />
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
      </div>
    </section>
  );
};
export default About;
