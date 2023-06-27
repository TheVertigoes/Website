import React from "react";
import { Link } from "react-router-dom";
import "../styles/Videos.css";
import Video from "./ui/Video";

function Videos() {
  return (
    <section id="videos">
      <div className="videos__top--info">
        <p className="videos__top--para">
          <b className="videos__top--bold"> THE VERTIGOES</b> find themselves in
          a sensual and nostalgic Nordic Noir soundscape, with a dramatic and captivating melancholy
        </p>
      </div>
      <div className="videos--container">
        <Video
          title="Blondes for Diamonds"
          img="https://i.ytimg.com/vi/IV-dgRDg3gA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvm6ySIcaq2ZiAp6s9mFgL5mQtmg"
          date="16. Feb. 2023"
          link="https://www.youtube.com/watch?v=IV-dgRDg3gA"
        />
        <Video
          title="Save Your Song"
          img="https://i.ytimg.com/vi/84NQmhniH20/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB8V90h0dPrr_Lsq0SbXUK_OyQjhw"
          date="9. Dec. 2022"
          link="https://www.youtube.com/watch?v=84NQmhniH20"
        />
        <Video
          title="Utopia"
          img="https://i.ytimg.com/vi/pGwqh0IpJ4w/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGQoVjAP&rs=AOn4CLAiNhTeVBwSLqVJIlewfkgt1CMUug"
          date="18. Jun. 2022"
          link="https://www.youtube.com/watch?v=pGwqh0IpJ4w"
        />
        <Video
          title="Audience of Love"
          img="https://i.ytimg.com/vi/k_J0kPxmg9s/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAypq4tYolzorNYd-H-3Vs8Kgv19g"
          date="6. May. 2022"
          link="https://www.youtube.com/watch?v=k_J0kPxmg9s"
        />
        <Video
          title="Dance Them Down"
          img="https://i.ytimg.com/vi/6qRd1Qt6hcc/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARh_IBMoFDAP&rs=AOn4CLBhFq8_f-lOQ9zzJhDiWmlFLUmEsw"
          date="26. Okt. 2021"
          link="https://www.youtube.com/watch?v=6qRd1Qt6hcc"
        />
        <Link to="/videos" className="videos__see-more">See More</Link>
      </div>
    </section>
  );
}

export default Videos;
