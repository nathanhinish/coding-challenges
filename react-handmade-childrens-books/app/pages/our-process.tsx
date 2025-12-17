import { SiteFooter } from "../blocks/site-footer";
import { SiteNav } from "../blocks/site-nav";

export function OurProcess() {
  return (
    <div className="container">
      <SiteNav />
      <main>
        <h1>Our Process</h1>

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
      <SiteFooter />
    </div>
  );
}
