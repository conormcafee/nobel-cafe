export const Footer = () => {
  return (
    <footer className="grid sm:grid-cols-3 gap-8">
      <section>
        <h5>Opening Hours</h5>
        <address>
          <span className="block">102-104 Church Street</span>
          <span className="block">Ballymena</span>
          <span className="block">BT43 6DF</span>
        </address>
      </section>

      <section>
        <h5>Opening Hours</h5>

        <ul>
          <li>
            Monday - Saturday <span className="block font-bold">8am - 5pm</span>
          </li>
          <li>
            Sunday <span className="block font-bold">Close</span>
          </li>
        </ul>
      </section>

      <section>
        <h5>Speak with Us</h5>

        <ul>
          <li>
            Call:{" "}
            <a href="tel:+442825654302" title="Call Nobel Cafe">
              028 256 54302
            </a>
          </li>
          <li>
            Email:{" "}
            <a href="mailto:info@nobelcafe.co.uk" title="Email Nobel Cafe">
              info@nobelcafe.co.uk
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};
