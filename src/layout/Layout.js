import { Fragment } from "react";
import ImageView from "../components/ImageView";
import BackBtn from "./BackBtn";
import DayNightMood from "./DayNightMood";
import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <Fragment>
      <ImageView />
      <Header />
      <main className="main-left pp-main-section">{children}</main>
      <DayNightMood />
      <BackBtn />
    </Fragment>
  );
};
export default Layout;
