import LSystem, { Ruleset } from "../../components/LSystem";
import { NavElement } from "../../components/Navbar";
import styles from "../../styles/Fullscreen.module.css";
import { SideDrawer } from "../../components/SideDrawer";
import { getDescription } from "../../utils/readFiles";

export async function getStaticProps() {
  const description = await getDescription("fern-3.md");
  return {
    props: {
      description,
    },
  };
}

type Props = {
  description: string;
};

const Fern3 = ({ description }: Props) => {
  const fern3: Ruleset = {
    color: "#91fc8e",
    minIterations: 1,
    maxIterations: 5,
    axiom: "F",
    replace: {
      F: "F[+FF][-FF]F[-F][+F]F",
    },
    angle: 22.5,
    initLength: (sizes) => sizes.height * 0.9,
    initTranslation: (sizes) => [sizes.width / 2, sizes.height],
    divideFactor: 3,
  };
  return (
    <main className={styles.fullScreen}>
      <LSystem ruleset={fern3} />
      <SideDrawer description={description} />
      <NavElement />
    </main>
  );
};

export default Fern3;
