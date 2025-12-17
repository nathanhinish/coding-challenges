import { SiteFooter } from "../blocks/site-footer";
import { SiteNav } from "../blocks/site-nav";

export function Welcome() {
  return (
    <div className="container">
      <SiteNav />
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
      </main>
      <SiteFooter />
    </div>
  );
}
