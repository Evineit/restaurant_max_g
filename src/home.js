import "./style.css";

export default function home() {
  const hero = document.createElement("div");
  hero.classList.add("hero");
  const para = document.createElement("p");

  para.innerHTML = `I take brief but concise notes from the best cooking books of all time.
    Them, in my monthly newsletter, I share the big ideas you can use to
    <em>cook better</em> and <em>be creative</em>.
    <br>
    <br>
    I'm learning a lot and so will you.`;
  hero.append(heroTitle(), para, btnLearnMore());
  return hero;
}

function heroTitle() {
  const heading = document.createElement("h1");
  heading.textContent = "Hi, I'm Max G.";
  heading.classList.add("hero-title");
  return heading;
}

function btnLearnMore() {
  const btn = document.createElement("button");
  btn.classList.add("btn-cta");
  btn.textContent = "Learn more";
  return btn;
}
