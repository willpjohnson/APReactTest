import React from 'react';

class Banner extends React.Component {
  constructor(props) {
    super(props)

    this.state = {top: 0, left: 0}
    this.updateSize = this.updateSize.bind(this);
  }

  updateSize() {
    const bannerSize = document.getElementById("banner").getBoundingClientRect();
    this.setState({top: (bannerSize.height / 2) - 25, left: (bannerSize.width / 2) - 301})
  }

  componentWillMount() {
    const width = window.innerWidth;
    const height = width * 0.45347;
    this.setState({top: (height / 2) - 25, left: (width / 2) - 301})
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateSize);
  }

  render() {
    return(
      <div id="banner">
        <img id="banner-image" src="assets/banner.png"></img>
        <h1 style={{top: `${this.state.top}px`, left: `${this.state.left}px`}} id="banner-text">Hello, welcome to Reactor</h1>
      </div>
    )
  }
}

// const Banner = () => (
// <div id="banner">
//   <img id="banner-image" src="assets/banner.png"></img>
//   <h1 id="banner-text">Hello, welcome to Reactor</h1>
// </div>
// )
//
// window.addEventListener("onload", () => {
//   console.log("sup");
// })
//
// window.addEventListener("resize", () => {
//   let bannerSize = document.getElementById("banner").getBoundingClientRect();
//   let text = document.getElementById("banner-text");
//   let textSize = text.getBoundingClientRect();
//
//   let top = (bannerSize.height / 2) - (textSize.height / 2);
//   let left = (bannerSize.width / 2) - (textSize.width / 2);
//
//   text.style.top = `${top}px`;
//   text.style.left = `${left}px`;
//
//   console.log(top);
// })

export default Banner;
