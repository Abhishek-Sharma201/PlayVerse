import Link from "next/link";

export default function Home() {
  return (
    <div style={styles.page}>
      <h1>Welcome to the Games Hub!</h1>
      <p>Select a game to play:</p>
      <div style={styles.links}>
        <Link href="/game/spinner" style={styles.link}>
          Tic-Tac-Toe
        </Link>
        <Link href="/game/tictactoe" style={styles.link}>
          tictactoe
        </Link>
        <Link href="/game/trivia" style={styles.link}>
          trivia
        </Link>
        <Link href="/game/snake" style={styles.link}>
          snake
        </Link>
        <Link href="/game/vr" style={styles.link}>
          VR
        </Link>
      </div>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "20px",
  },
  links: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "20px",
  },
  link: {
    padding: "10px 20px",
    background: "#0070f3",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    fontWeight: "bold",
  },
};
