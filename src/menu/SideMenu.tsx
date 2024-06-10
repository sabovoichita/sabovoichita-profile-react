export function SideMenu() {
  return (
    <div id="side-menu">
      <section>
        <form action="secretara.html">
          <h2>
            <span>Contact</span>
          </h2>
          <div>
            <label htmlFor="userEmail">Email</label>
            <input
              type="email"
              name="email"
              id="userEmail"
              placeholder="your@email.com"
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor="userName">Name</label>
            <input
              type="text"
              name="name"
              id="userName"
              placeholder="Enter your name"
              required
            />
          </div>

          <button type="submit">Send</button>
        </form>
      </section>
      <section id="rubik">
        <section>
          <h2>
            <span>Rubik's Face</span>
          </h2>
          <div id="rubik-face">
            <div style={{ background: "#0082df" }}></div>
            <div style={{ background: " #ffff00" }}></div>
            <div style={{ background: "#ff2c0a" }}></div>
            <div style={{ background: "#0082df" }}></div>
            <div style={{ background: "#ffff00" }}></div>
            <div style={{ background: "#ff2c0a" }}></div>
            <div style={{ background: "#0082df" }}></div>
            <div style={{ background: "#ffff00" }}></div>
            <div style={{ background: "#ff2c0a" }}></div>
          </div>
        </section>
      </section>
    </div>
  );
}
