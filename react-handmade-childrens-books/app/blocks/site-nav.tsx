const LINKS = [
  { label: "Home", href: "/" },
  { label: "Our Materials", href: "/materials" },
  { label: "Our Process", href: "/process" },
];

export function SiteNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          HCB
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {LINKS.map(({ label, href }) => (
              <li className="nav-item" key={href}>
                <a className="nav-link" aria-current="page" href={href}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
