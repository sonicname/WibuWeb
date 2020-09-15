import React, { Component } from "react";
import axios from "axios";

export default class Maincontent extends Component {
  constructor() {
    super();
    this.state = {
      img: "",
      category: [
        "hass",
        "hmidriff",
        "pgif",
        "hentai",
        "holo",
        "hneko",
        "neko",
        "hkitsune",
        "kemonomimi",
        "anal",
        "hanal",
        "gonewild",
        "kanna",
        "ass",
        "pussy",
        "thigh",
        "hthigh",
        "gah",
        "coffee",
        "food",
        "paizuri",
        "tentacle",
        "boobs",
        "hboobs",
      ],
      seleted: "",
      error: "",
      hintCategory: "",
    };

    this.onInputCategory = this.onInputCategory.bind(this);
    this.onSearchImg = this.onSearchImg.bind(this);
  }

  componentDidMount() {
    try {
      axios.get("https://nekobot.xyz/api/image?type=hthigh").then((res) => {
        this.setState({
          img: res.data.message,
        });
      });
    } catch (error) {
      this.setState({
        error: error,
      });
    }
  }

  onInputCategory(event) {
    let categoryInput = event.target.value;
    const result = this.state.category.filter((category) => {
      return category.indexOf(categoryInput.toLowerCase()) !== -1;
    });
    this.setState({
      hintCategory: result.join(", "),
      seleted: categoryInput,
    });
  }

  onSearchImg(event) {
    try {
      axios
        .get("https://nekobot.xyz/api/image?type=" + this.state.seleted)
        .then((res) => {
          this.setState({
            img: res.data.message,
          });
        });
    } catch (error) {
      this.setState({
        error: error,
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="category-input">
          <input
            onChange={this.onInputCategory}
            className="form-control form-control-lg"
            type="text"
            placeholder="Nhập Thể Loại Rồi Enter"
          ></input>
          <p style={{ marginTop: 10 }}>Hint: {this.state.hintCategory}</p>
          <div className="text-center">
            <button
              type="button"
              onClick={this.onSearchImg}
              className="btn btn-primary"
            >
              Tìm Kiếm
            </button>
          </div>
        </div>

        <div className="showcase mt-1">
          <img
            src={this.state.img}
            className="img-src"
            width="100%"
            height="100%"
          ></img>
        </div>
      </div>
    );
  }
}
