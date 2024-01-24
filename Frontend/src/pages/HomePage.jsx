import Valkyrie from "../assets/images/Valkyrie.png"

export default function HomePage() {
  const styles = {
    section: {
      fontFamily: "Nunito",
      fontSize: "1rem",
      fontWeight: 1.5,
      lineHeight: 1.5,
      color: "#292b2c",
      padding: "0 2em",
    },
    wrapper: {
      textAlign: "center",
      maxWidth: "950px",
      margin: "0 auto",
      border: "1px solid #e6e6e6",      
      backgroundColor: "#FBFBFB",
      padding: "40px 25px",
      marginTop: "50px",
    },
    avatar: {
      margin: "-90px auto 30px",
      width: "100px",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "0",
    },
    quote: {
      lineHeight: 1.5,
      fontWeight: 300,
      marginBottom: "25px",
      fontSize: "1.375rem",
    },
    name: {
      marginBottom: "0",
      fontWeight: 600,
      fontSize: "1rem",
    },
    position: { fontWeight: 400 },
  };

  return (
    <div className="HomePage">
      <h1>Home Page</h1>
      <section style={styles.section}>
        <div style={styles.wrapper}>
          <img
            src={Valkyrie}
            alt="Valkyrie"
            style={styles.avatar}
          />
          <div>
            <p style={styles.quote}>This is my Overwatch LFG App</p>
          </div>
          <p style={styles.name}>
            Henry Zhou
            <span style={styles.position}> . Full Stack Developer</span>
          </p>
        </div>
      </section>
    </div>
  );
}
