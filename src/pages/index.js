import About from "../components/About";
import Contact from "../components/Contact";
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
                    Je suis un analyste développeur Front-End passionné par la technologie et l'innovation, avec une solide expérience dans les domaines du design et du développement web.
                  </p>
                  <div className="btn-bar">
                    <a className="px-btn px-btn-theme" href="static/pdf/daniel-luz-developpeur-front-end.pdf" target="_blank">
                      Télécharger CV
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hb-img">
                  <img src="static/img/banner-daniel.png" title="Daniel Banner" alt="daniel luz" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Contact />
    </Layout>
  );
};
export default Index;