import { SiteFooter } from "../blocks/site-footer";
import { SiteNav } from "../blocks/site-nav";

export function OurMaterials() {
  return (
    <div className="container">
      <SiteNav />
      <main>
        <h1>Our Materials</h1>

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
      </main>

      <SiteFooter />
    </div>
  );
}
