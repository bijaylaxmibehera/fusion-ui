import { Alert } from "../../components/Alert/Alert";
import "./AlertDocs.css";

export const AlertDocs = () => {
  return (
    <>
      <div className="alert-container">
        <div>
          <h2>Alert</h2>
          <p>
            Alerts are a useful tool for quickly notifying users of important
            information about the status of a system, feature, or page. They are
            essential to preserving user awareness and directing activities in
            an application. Alerts improve user experience by giving prompt
            notification on important changes or problems.
          </p>
          <p>
            By passing the corresponding class, you can modify the alerts'
            status. The chosen color scheme and icon are impacted by this.
          </p>
        </div>
        <div className="alert-showcase">
          <Alert type="success" text="success alert" />
          <Alert type="info" text="info alert" />
          <Alert type="warning" text="warning alert" />
          <Alert type="error" text="error" />
        </div>
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28229%2C223%2C214%2C1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CAlert%2520type%253D%2522success%2522%2520text%253D%2522success%2520alert%2522%2520%252F%253E%250A%253CAlert%2520type%253D%2522info%2522%2520text%253D%2522info%2520alert%2522%2520%252F%253E%250A%253CAlert%2520type%253D%2522warning%2522%2520text%253D%2522warning%2520alert%2522%252F%253E%250A%253CAlert%2520type%253D%2522error%2522%2520text%253D%2522error%2522%2520%252F%253E%250A"
            style={{
              width: "590px",
              height: "289px",
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
