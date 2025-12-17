const LINKS = [{ label: "Home", href: "/" }];

export function Welcome() {
  return (
    <div className="container">
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
      <main>
        <div className="card bg-dark text-light shadow-sm mb-4">
          <div className="card-body">
            <h1 className="card-title">Handmade Children's Books</h1>
            <p>
              At Handmade Children's Books, we are perfectionists. We handcraft
              each book, including binding, lettering, and illustration, with
              meticulous care. Our goal is to produce a beautiful piece of
              functional art that your family will cherish for generations.
              Please take a look through our offerings and don't hesitate to get
              in touch with any questions about our process or products.
            </p>
          </div>
        </div>

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

        <h2>Our Materials</h2>

        <p>
          At our shop, every handcrafted book begins with a deep commitment to
          the earth, starting with the paper itself. We meticulously source only
          FSC-certified papers, prioritizing those made from post-consumer
          recycled content (at least 30%) and responsibly managed forest fibers.
          Our partners are small, regional mills that practice regenerative
          forestry, ensuring no old-growth forests are disturbed and that every
          tree harvested is replaced. We visit these mills annually to verify
          their water conservation practices, low-impact pulping methods, and
          community engagement, ensuring our paper’s journey supports
          biodiversity and local economies from seed to sheet—never compromising
          the forest’s health for a single page.
        </p>
        <p>
          Our inks are equally thoughtfully chosen, reflecting our dedication to
          non-toxic, planet-positive practices. We exclusively use
          vegetable-based, soy or linseed oil inks, free from volatile organic
          compounds (VOCs) and heavy metals, which are biodegradable and safe
          for both the environment and the hands of our artisans. These inks are
          sourced from small-batch producers who prioritize organic farming for
          their plant oils, avoiding palm oil and ensuring no deforestation
          occurs in their supply chain. By choosing these inks, we eliminate
          harmful chemical runoff, protect local waterways, and guarantee that
          every vibrant color in your book is as gentle on the planet as it is
          beautiful.
        </p>

        <h2>Our Process</h2>

        <p>
          At our workshop, every illustration for our handcrafted editions of
          James and the Giant Peach, Peter Pan, and The Little Prince begins not
          with a digital sketch, but with a quiet reverence for the story’s
          heart. Our illustrators, many trained in children’s literature,
          immerse themselves in the original texts, sketching by hand on our
          FSC-certified paper using only plant-based pigments—crushed mulberries
          for James’s peach skin, mineral oxides for the starlit skies of
          Neverland, and crushed berries for the Little Prince’s iconic rose.
          Each character, from James’s curious eyes to the Little Prince’s
          gentle gaze, is drawn through dozens of iterations, guided by child
          psychologists to ensure warmth without distraction. We avoid crowded
          scenes: the peach’s textured rind is built with layered watercolors,
          Peter’s flight is suggested through soft, flowing ink lines (never
          sharp angles), and the Little Prince’s rose blooms in a palette of
          earthy ochre and sky blue—colors that soothe young eyes while honoring
          the story’s soul. Every stroke is hand-inked, with no digital
          shortcuts, so the art feels alive, as if it were drawn by a friend who
          truly knows these tales.
        </p>
        <p>
          We don’t just illustrate classics—we reimagine them with intention.
          For James and the Giant Peach, we focus on the tactile joy of the
          fruit’s peel, rendered with subtle, raised texture in the paper
          itself. In Peter Pan, the Neverland forests glow with natural,
          non-toxic pigments that evoke the magic of childhood without
          overwhelming the page. And for The Little Prince, the rose isn’t just
          drawn—it’s felt, with delicate, hand-drawn veins that children trace
          with their fingers, safe in the knowledge that the ink is soy-based
          and the pigments are grown from earth, not factories. Each
          illustration is tested with real children during our community
          workshops: Does the peach feel big? Does Peter’s shadow feel light?
          Does the rose feel like something you’d want to keep? Only when a
          child’s hand lingers on the page, smiling, do we know we’ve honored
          both the story and the child who reads it. This isn’t just a book—it’s
          a hug, made by hand, for a story that belongs to all of us.
        </p>
      </main>

      <footer className="rounded mt-4">
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
