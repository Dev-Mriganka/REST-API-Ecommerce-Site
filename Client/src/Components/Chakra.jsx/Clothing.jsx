import styles from './Navbar.module.css';
export default function BodyCare() {
    return (
      <div
        style={{position: "absolute", left: "33rem", margin: "15px"}}
        className="navbarAnim"
      >
        <ul className={styles.Floating}>
          <li>
            <div className={styles.Floating_heading}>8 BY YOOX</div>
            <div className={styles.Floating_div}>
              <ul>
                <li>CATEGORIES</li>
                <li>COATS & JACKETS</li>
                <li>DRESSES</li>
                <li>SWEATERS AND SWEATSHIRTS</li>
                <li>SHIRTS</li>
                <li>SKIRTS</li>
                <li>PANTS</li>
                <li>T-SHIRTS</li>
              </ul>
            </div>
          </li>
          <li>
            <img
              src="https://www.yoox.com/images/yoox80/banners/6824_1_NewTrend_DD_W.jpg?634485886601286852"
              width="202px"
              alt=""
            />
          </li>
        </ul>
      </div>
    );
}