const LINKS = [{ label: "Home", href: "/" }];

export function Welcome() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Handmade Children's Books
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {LINKS.map(({ label, href }) => (
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href={href}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <h1>Welcome to our site!</h1>
        <p>
          Here at HCB, we are perfectionists. We handcraft each book, including
          binding, lettering, and illustration, with meticulous care. Our
          intention is to produce something that will last your family for
          generations. Please take a look through our offerings and don't
          hesitate to get in touch with any questions about our process or
          products.
        </p>

        <h2>Available books</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>James and the Giant Peach</td>
              <td>Roald Dahl</td>
              <td>$1,400</td>
            </tr>
            <tr>
              <td>The Little Prince</td>
              <td>Antoine de Saint-Exupéry</td>
              <td>$850</td>
            </tr>
            <tr>
              <td>Peter Pan</td>
              <td>J.M. Barrie</td>
              <td>$2,300</td>
            </tr>
          </tbody>
        </table>
      </main>

      <footer>
        <div className="row fs-6">
          <div className="col">&copy; 2025 HBC, LLC.</div>
          <div className="col">
            <a href="tel:1234567890">123-456-7890</a>
          </div>
          <div className="col">
            <a href="mailto:example.hcb&#64;example.com">
              example.hcb&#64;example.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
