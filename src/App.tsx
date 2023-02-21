import { FC, useEffect, useRef } from "react";

import "./App.css";

const App: FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const excerptRef = useRef<HTMLParagraphElement>(null);
  const profileImgRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLButtonElement>(null);
  const dateRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const getData = () => {
      if (headerRef.current) {
        headerRef.current.innerHTML = `<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />`;
        headerRef.current.classList.remove("animated-bg");
      }

      if (titleRef.current) {
        titleRef.current.textContent = "Lorem ipsum dolor sit amet";
        titleRef.current.classList.remove("animated-bg-text");
      }

      if (excerptRef.current) {
        excerptRef.current.textContent =
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis";
        excerptRef.current
          .querySelectorAll(".animated-bg-text")
          .forEach((bg) => bg.classList.remove("animated-bg-text"));
      }

      if (profileImgRef.current) {
        profileImgRef.current.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />`;
        profileImgRef.current.classList.remove("animated-bg");
      }

      if (nameRef.current) {
        nameRef.current.textContent = "John Doe";
        nameRef.current.classList.remove("animated-bg-text");
      }

      if (dateRef.current) {
        dateRef.current.textContent = "Oct 08, 2020";
        dateRef.current.classList.remove("animated-bg-text");
      }
    };

    const timeoutId = setTimeout(getData, 2500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="card">
      <div className="card-header animated-bg" ref={headerRef}>
        &nbsp;
      </div>

      <div className="card-content">
        <h3 className="card-title animated-bg animated-bg-text" ref={titleRef}>
          &nbsp;
        </h3>
        <p className="card-excerpt" ref={excerptRef}>
          &nbsp;
          <span className="animated-bg animated-bg-text">&nbsp;</span>
          <span className="animated-bg animated-bg-text">&nbsp;</span>
          <span className="animated-bg animated-bg-text">&nbsp;</span>
        </p>
        <div className="author">
          <div className="profile-img animated-bg" ref={profileImgRef}>
            &nbsp;
          </div>
          <div className="author-info">
            <strong className="animated-bg animated-bg-text" ref={nameRef}>
              &nbsp;
            </strong>
            <small className="animated-bg animated-bg-text" ref={dateRef}>
              &nbsp;
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
