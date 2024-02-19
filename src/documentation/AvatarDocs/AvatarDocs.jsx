import "./AvatarDocs.css";
import { Avatar } from "../../components/Avatar/Avatar";

export const AvatarDocs = () => {
  return (
    <>
      <div className="avatar-docs-conatiner">
        <div>
          <h2>Avatar</h2>
          <p>
            An avatar is a representation of a user that shows their profile
            photo, initials, or fallback icon.
          </p>
        </div>

        <div className="image-avatar-text">
          <h3>Image avatar</h3>
          <p>
            Three sizes of image avatars are available: small, medium, and
            large.
          </p>
        </div>
        <div className="image-avatar-showcase">
          <Avatar
            imageUrl="https://plus.unsplash.com/premium_photo-1664298528358-790433ba0815?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            size="lg"
          />
          <Avatar
            imageUrl="https://plus.unsplash.com/premium_photo-1664298528358-790433ba0815?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            size="md"
          />
          <Avatar
            imageUrl="https://plus.unsplash.com/premium_photo-1664298528358-790433ba0815?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            size="sm"
          />
        </div>
        <div className="letter-avatar-text">
          <h3>Letter avatar</h3>
          <p>
            Three sizes (small, medium, and large) and three color states
            (primary, secondary, and success) are available for the letter
            avatar.
          </p>
        </div>
        <div className="letter-avatar-showcase">
          <Avatar letter="A" size="lg" color="primary" />
          <Avatar letter="B" size="md" color="secondary" />
          <Avatar letter="C" size="sm" color="success" />
        </div>
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28229%2C223%2C214%2C1%29&t=seti&wt=sharp&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CAvatar%250AimageUrl%253D%2522https%253A%252F%252Fplus.unsplash.com%252Fpremium_photo-1664298528358-790433ba0815%253Fq%253D80%2526w%253D2070%2526auto%253Dformat%2526fit%253Dcrop%2526ixlib%253Drb-4.0.3%2526ixid%253DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%25253D%25253D%2522%250A%2520size%253D%2522lg%2522%252F%253E%250A%253CAvatar%250AimageUrl%253D%2522https%253A%252F%252Fplus.unsplash.com%252Fpremium_photo-1664298528358-790433ba0815%253Fq%253D80%2526w%253D2070%2526auto%253Dformat%2526fit%253Dcrop%2526ixlib%253Drb-4.0.3%2526ixid%253DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%25253D%25253D%2522%250Asize%253D%2522md%2522%252F%253E%250A%2520%253CAvatar%250AimageUrl%253D%2522https%253A%252F%252Fplus.unsplash.com%252Fpremium_photo-1664298528358-790433ba0815%253Fq%253D80%2526w%253D2070%2526auto%253Dformat%2526fit%253Dcrop%2526ixlib%253Drb-4.0.3%2526ixid%253DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%25253D%25253D%2522%250Asize%253D%2522sm%2522%2520%252F%253E%250A%253CAvatar%2520letter%253D%2522A%2522%2520size%253D%2522lg%2522%2520color%253D%2522primary%2522%2520%252F%253E%250A%253CAvatar%2520letter%253D%2522B%2522%2520size%253D%2522md%2522%2520color%253D%2522secondary%2522%2520%252F%253E%250A%253CAvatar%2520letter%253D%2522C%2522%2520size%253D%2522sm%2522%2520color%253D%2522success%2522%2520%252F%253E%250A"
            style={{width: "1010px", height: "523px", border:"0", transform: "scale(1)", overflow:"hidden"}}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
      </div>
    </>
  );
};
