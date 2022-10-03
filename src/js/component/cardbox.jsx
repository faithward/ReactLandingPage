import React from "react";

let cardInfo = [
  {
    title: "Card title 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl:
      "https://edgewoodreit.com/wp-content/uploads/2018/01/500x325-300x195.png",
    buttonUrl: "#",
    buttonLabel: "Find Out More!",
  },
  {
    title: "Card title 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl:
      "https://edgewoodreit.com/wp-content/uploads/2018/01/500x325-300x195.png",
    buttonUrl: "#",
    buttonLabel: "Find Out More!",
  },
  {
    title: "Card title 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl:
      "https://edgewoodreit.com/wp-content/uploads/2018/01/500x325-300x195.png",
    buttonUrl: "#",
    buttonLabel: "Find Out More!",
  },
  {
    title: "Card title 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl:
      "https://edgewoodreit.com/wp-content/uploads/2018/01/500x325-300x195.png",
    buttonUrl: "#",
    buttonLabel: "Find Out More!",
  },
];

const Cardbox = () => {
  return (
    <div className="row">
      <div className="d-flex flex-row justify-content-evenly flex-wrap">
        {cardInfo.map((card, index) => {
          return (
            <div key={index} className="col-md-3 col-sm-12 p-1">
              <div className="card">
                <img
                  className="card-img-top"
                  src={card.imageUrl}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                  <a href={card.buttonUrl} className="btn btn-primary">
                    {card.buttonLabel}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cardbox;
