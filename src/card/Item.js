import React from "react";
import "./style.css";

export const ItemBig = ({
  logo,
  image,
  title,
  description,
  backgroundColor,
  backgroundImage,
  displayBackground,
  titleColor,
  descriptionColor,
}) => {
  return (
    <div className="item-big" style={{ backgroundColor: `${backgroundColor}` }}>
      <img
        src={backgroundImage}
        alt=""
        style={{
          position: "absolute",
          height: 233,
          width: 457,
          display: `${displayBackground}`,
        }}
      />
      <div
        style={{
          marginLeft: 30,
          marginRight: 30,
          marginTop: 20,
          position: "relative",
          lineHeight: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              height: 44,
              width: 44,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={logo}
              alt=""
              style={{ height: 44, width: 44, alignItems: "center" }}
            />
          </div>
          <div>
            <img
              src={image}
              alt=""
              style={{ height: 24, width: 24, alignItems: "center" }}
            />
          </div>
        </div>
        <div style={{ width: 300 }}>
          <h1 style={{ color: `${titleColor}` }} className="title-text">
            {title}
          </h1>
        </div>
        <div style={{ width: 245, marginTop: 40 }}>
          <p
            style={{ color: `${descriptionColor}` }}
            className="description-text"
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export const ItemSmall = ({
  logo,
  title,
  titledescription,
  number,
  footer,
  backgroundColor,
  textColor,
}) => {
  return (
    <div className="item-low" style={{ backgroundColor: `${backgroundColor}` }}>
      <div
        style={{
          marginLeft: 30,
          marginRight: 30,
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ lineHeight: 0.9 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                height: 44,
                width: 44,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={logo}
                alt=""
                style={{ height: 42, width: 40, alignItems: "center" }}
              />
            </div>
          </div>
          <div>
            <h3
              style={{ fontSize: 16, color: `${textColor}` }}
              className="title-text-small"
            >
              {title}
            </h3>
          </div>
          <div>
            <p
              style={{ fontSize: 12, lineHeight: 1.2 }}
              className="description-text"
            >
              {titledescription}
            </p>
          </div>
        </div>

        <div style={{ lineHeight: 0.2, marginTop: 20 }}>
          <h2 className="description-text-number" style={{ fontSize: 20 }}>
            {number}
          </h2>
          <p className="description-text-small">{footer}</p>
        </div>
      </div>
    </div>
  );
};

export const ItemMedium = ({
  logo,
  title,
  description,
  footer,
  number,
  imageBackgroundColor,
}) => {
  return (
    <div className="item-medium">
      <div
        style={{
          marginLeft: 30,
          marginRight: 30,
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                height: 44,
                width: 44,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={logo}
                alt=""
                style={{
                  height: 44,
                  width: 44,
                  alignItems: "center",
                  backgroundColor: `${imageBackgroundColor}`,
                }}
              />
            </div>
          </div>
          <div>
            <h3 className="title-text-medium">{title}</h3>
          </div>
          <div>
            <p className="description-text-medium">{description}</p>
          </div>
        </div>
        <div
          style={{
            lineHeight: 0.0,
            height: 100,
          }}
        >
          <h3
            className="description-text"
            style={{ fontSize: 20, fontWeight: "bold" }}
          >
            {number}
          </h3>
          <p className="description-text-small">{footer}</p>
        </div>
      </div>
    </div>
  );
};

export const ItemLong = ({ logo, title, description, footer, image }) => {
  return (
    <div className="item-long">
      <div style={{ display: "flex" }}>
        <div style={{ backgroundColor: "white", width: 333 }}>
          <div
            style={{
              marginLeft: 30,
              marginRight: 30,
              marginTop: 20,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    height: 44,
                    width: 44,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={logo}
                    alt=""
                    style={{ height: 44, width: 44, alignItems: "center" }}
                  />
                </div>
              </div>
              <div>
                <h3 className="title-text-medium">{title}</h3>
              </div>
              <div>
                <p className="description-text-medium">{description}</p>
              </div>
            </div>
            <div style={{ lineHeight: 0.2 }}>
              <p className="description-text-small">{footer}</p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: 333,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={image}
            alt=""
            style={{ width: 333, alignItems: "center" }}
          />
        </div>
      </div>
    </div>
  );
};
