import './style.css'

export function generateHome() {
    const heading = document.createElement("h1")
    const para = document.createElement("p1")

    heading.textContent = "Hi, I'm Max G."
    para.innerHTML = `I take brief but concise notes from the best cooking books of all time.
    Them, in my monthly newsletter, I share the big ideas you can use to
    cook better and be smarter.
    <br>
    I'm learning a lot and so will you.`

    return [nav, heading, para]
}
