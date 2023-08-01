import dynamic from "next/dynamic";
import About from "../components/About";
import Contact from "../components/Contact";
import Services from "../components/Services";
import TypingAnimation from "../components/TypingAnimation";
import Layout from "../layout/Layout";
const Index = () => {
  return (
    <Layout>
      <section
        id="home"
        data-nav-tooltip="Home"
        className="pp-section pp-scrollable"
      >
        <div className="home-banner">
          <div className="container">
            <div className="row full-screen align-items-center">
              <div className="col-lg-6">
                <div className="type-box">
                  <h6>Bonjour je suis</h6>
                  <h1 className="font-alt">Daniel Luz</h1>
                  <p className="lead">
                    Je suis un <TypingAnimation /> passionné!
                  </p>
                  <p className="desc">
                    Je suis un Analyste Développeur Front-End passionné par la création d'expériences numériques incroyables et fonctionnelles pour les utilisateurs. Mon expertise inclut HTML, CSS, Sass, JavaScript, TypeScript et l'utilisation de frameworks tels que Angular et React.js. Je suis constamment à la recherche de nouveaux défis et d'opportunités pour apprendre et évoluer dans le monde de la programmation web. Ensemble, rendons le web encore plus incroyable!
                  </p>
                  <div className="btn-bar">
                    <a className="px-btn px-btn-theme" href="#">
                      Télécharger CV
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hb-img">
                  <img src="static/img/home-banner.png" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Home */}
      {/* about us */}
      <About />
      {/* End about us */}
      {/* Services */}
      <Services />
      {/* End Services */}
      {/* Portfolio */}
      <Contact />
    </Layout>
  );
};
export default Index;