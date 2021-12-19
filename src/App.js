import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import styles from "./index.module.sass";

const theme = {
  middle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
};

const Container = styled.button((props) => ({
  width: "340px",
  height: "480px",
  position: props.theme.middle.position,
  left: props.theme.middle.left,
  transform: props.theme.middle.transform
}));

const Contents = styled.div({
  width: "100%",
  height: "100%",
  overflow: "hidden",
  backfaceVisibility: "hidden",
  position: "absolute",
  transition: "transform .5s linear"
});

const BackContents = styled.div((props) => ({
  position: props.theme.middle.position,
  top: props.theme.middle.top,
  left: props.theme.middle.left,
  transform: props.theme.middle.transform
}));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container type="button" className={styles.Container}>
        <Contents className={styles.Cover} />
        <Contents className={styles.Main}>
          <BackContents className={styles.BackContent}>
            <h1>Merry Christmas</h1>
            <p>Happy Holiday</p>
          </BackContents>
        </Contents>
      </Container>
    </ThemeProvider>
  );
}

export default App;
