import  { Component} from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import ReviesItem from "../ReviesItem/ReviesItem";
import img1 from "../../img/Frame 45 (1).png";
import img2 from "../../img/Frame 45.png";
import img3 from "../../img/Frame 45 (2).png";
import next from "../../img/Up.png";
import prev from "../../img/Up 2.png";
import styles from "./Revies.module.css";
export default class PreviousNextMethods extends Component {
  slider: any;
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: true,
      // infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <div key={1}>
            <ReviesItem img={img1} name={"Leslie Alexander"}></ReviesItem>
          </div>
          <div key={2}>
            <ReviesItem img={img2} name={"amelic bronce"}></ReviesItem>
          </div>
          <div key={3}>
            <ReviesItem img={img3} name={"luiza germorer"}></ReviesItem>
          </div>
          <div key={4}>
            <ReviesItem img={img1} name={"Leslie Alexander"}></ReviesItem>
          </div>
        </Slider>
        <div className={styles.nav}>
          <button className={styles.button} onClick={this.previous}>
            <img src={prev} alt="" className={styles.img} />
          </button>
          <button className={styles.button} onClick={this.next}>
            <img src={next} alt="" className={styles.img} />
          </button>
        </div>
      </div>
    );
  }
}
