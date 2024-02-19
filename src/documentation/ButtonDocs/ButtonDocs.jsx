import {
  FloatingButton,
  IconButton,
  LinkButton,
  OutlineButton,
  PrimaryButton,
} from "../../components/Button/Button";
import "./ButtonDocs.css";

export const ButtonDocs = () => {
  return (
    <>
      <div className="button-docs-conatiner">
        <div className="button-docs-text">
          <h2>Button</h2>
          <p>
            A button is an interactive feature that indicates a potential user
            action and encourages engagement or involvement with an interface.
            It communicates to consumers by visual signals and affordances that
            clicking or tapping it will initiate a specific function or process,
            which contributes to intuitive navigation and user experience
            design.
          </p>
          <p>
            There are five fundamental sorts of buttons: floating, outline,
            link, icon, and primary.
          </p>
        </div>
        <div className="button-showcase">
          <PrimaryButton text="primary button" bgColor="blue" />
          <OutlineButton text="outline button" color="red" />
          <LinkButton
            text="open youtube"
            color="blue"
            targetUrl="https://www.youtube.com/"
          />
          <IconButton
            text="add to wishlist"
            icon={<i className="fa-solid fa-heart"></i>}
            bgColor="purple"
          />
          <FloatingButton
            icon={<i class="fa-light fa-thumbtack"></i>}
            bgColor="red"
          />
        </div>
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28229%2C223%2C214%2C1%29&t=seti&wt=sharp&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%2520%253CPrimaryButton%2520text%253D%2522primary%2520button%2522%2520bgColor%253D%2522blue%2522%2520%252F%253E%250A%2520%253COutlineButton%2520text%253D%2522outline%2520button%2522%2520color%253D%2522red%2522%2520%252F%253E%250A%2520%253CLinkButton%250A%2520%2520%2520%2520%2520%2520text%253D%2522open%2520youtube%2522%250A%2520%2520%2520%2520%2520%2520color%253D%2522blue%2522%250A%2520%2520%2520%2520%2520%2520targetUrl%253D%2522https%253A%252F%252Fwww.youtube.com%252F%2522%250A%2520%2520%2520%252F%253E%250A%2520%253CIconButton%250A%2520%2520%2520%2520%2520%2520%2520text%253D%2522add%2520to%2520wishlist%2522%250A%2520%2520%2520%2520%2520%2520%2520icon%253D%257B%253Ci%2520className%253D%2522fa-solid%2520fa-heart%2522%253E%253C%252Fi%253E%257D%250A%2520%2520%2520%2520%2520%2520%2520bgColor%253D%2522purple%2522%250A%2520%2520%2520%252F%253E%250A%2520%253CFloatingButton%250A%2520%2520%2520%2520%2520%2520%2520icon%253D%257B%253Ci%2520class%253D%2522fa-light%2520fa-thumbtack%2522%253E%253C%252Fi%253E%257D%250A%2520%2520%2520%2520%2520%2520%2520bgColor%253D%2522red%2522%250A%2520%2520%252F%253E"
          style={{width: "896px", height: "567px", border:"0", transform: "scale(1)", overflow:"hidden"}}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
    </>
  );
};
