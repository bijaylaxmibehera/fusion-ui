import { Heading } from "../../components/Heading/Heading";
import "./HeadingDocs.css";

export const HeadingDocs = () => {
  return (
    <>
      <div className="headings-docs-container">
        <div>
          <h2>Headings</h2>
          <p>
            Headings function as headings or section headers, offering a variety
            of style options to denote content hierarchy and highlight key
            points in a paper or webpage. They facilitate better content
            organization, reader navigation across parts, and readability.
            Headings improve visual hierarchy and user experience by using
            different font sizes, weights, and styles.
          </p>
          <p>
            The text's style can be modified by passing the heading type and
            heading text as props to the component.
          </p>
          <div className="heading-showcase">
            <Heading headingType="h1" headingText="Heading level 1" />
            <Heading headingType="h2" headingText="Heading level 2" />
            <Heading headingType="h3" headingText="Heading level 3" />
            <Heading headingType="h4" headingText="Heading level 4" />
            <Heading headingType="h5" headingText="Heading level 5" />
            <Heading headingType="h6" headingText="Heading level 6" />
          </div>
          <code>
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28229%2C223%2C214%2C1%29&t=seti&wt=sharp&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CHeading%2520headingType%253D%2522h1%2522%2520headingText%253D%2522Heading%2520level%25201%2522%252F%253E%250A%253CHeading%2520headingType%253D%2522h2%2522%2520headingText%253D%2522Heading%2520level%25202%2522%252F%253E%250A%253CHeading%2520headingType%253D%2522h3%2522%2520headingText%253D%2522Heading%2520level%25203%2522%252F%253E%250A%253CHeading%2520headingType%253D%2522h4%2522%2520headingText%253D%2522Heading%2520level%25204%2522%252F%253E%250A%253CHeading%2520headingType%253D%2522h5%2522%2520headingText%253D%2522Heading%2520level%25205%2522%252F%253E%250A%253CHeading%2520headingType%253D%2522h6%2522%2520headingText%253D%2522Heading%2520level%25206%2522%252F%253E%250A"
              style={{
              width: "768px",
              height: "200px",
              border: 0,
              transform: "scale(1)",
              overflow: "hidden",
              }}
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </code>
        </div>
      </div>
    </>
  );
};
