import "./TextDocs.css";
import { Text } from "../../components/Text/Text";

export const TextDoc = () => {
  return (
    <>
      <div className="text-docs-container">
        <div>
          <h2>Text</h2>
          <p>
            In a document or webpage, the text component is used to show text or
            paragraphs in different sizes for presentation and emphasis. To
            increase readability, use the font-size CSS property. When the text
            element is used well, it improves user engagement and visual
            hierarchy while guaranteeing that the material is presented in an
            aesthetically pleasing manner.
          </p>
        </div>
        <div className="text-showcase">
          <Text size="2xl" text="This is 2xl text." />
          <Text size="xl" text="This is xl text." />
          <Text size="lg" text="This is large text." />
          <Text size="base" text="This is normal text." />
          <Text size="sm" text="This is small text." />
        </div>
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28229%2C223%2C214%2C1%29&t=seti&wt=sharp&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%2520%253CText%2520size%253D%25222xl%2522%2520text%253D%2522This%2520is%25202xl%2520text.%2522%252F%253E%250A%2520%253CText%2520size%253D%2522xl%2522%2520text%253D%2522This%2520is%2520xl%2520text.%2522%252F%253E%250A%2520%253CText%2520size%253D%2522lg%2522%2520text%253D%2522This%2520is%2520large%2520text.%2522%252F%253E%250A%2520%253CText%2520size%253D%2522base%2522%2520text%253D%2522This%2520is%2520normal%2520text.%2522%252F%253E%250A%2520%253CText%2520size%253D%2522sm%2522%2520text%253D%2522This%2520is%2520small%2520text.%2522%252F%253E%250A"
            style={{
              width: "737px",
              height: "300px",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden",
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
      </div>
    </>
  );
};
