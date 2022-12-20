import styles from './Navbar.module.css';
export default function HairCare() {
    return (
      <div
        style={{position: "absolute", left: "7rem", margin: "15px"}}
        className="navbarAnim"
      >
        <ul className={styles.Floating}>
          <li>
            <div className={styles.Floating_heading}>BY PRODUCT TYPE</div>
            <div className={styles.Floating_div}>
              <ul>
                <li>CLOTHING</li>
                <li>SHOES</li>
                <li>ACCESSORIES</li>
                <li>BAGS</li>
                <li>EYEWEAR</li>
                <li>PANTS</li>
                <li>VIEW ALL</li>
              </ul>
            </div>
            <img
              src="https://www.yoox.com/images/yoox80/banners/6825_1_MontblancOnTheMove_WM_Tris.jpg?634485886601286852#width=473&height=660"
              width="172px"
              alt=""
            />
          </li>
          <li>
            <div className={styles.Floating_heading}>LATEST ARRIVALS</div>
            <div className={styles.Floating_div}>
              <ul>
                <li>GUCCI</li>
                <li>ARMANI</li>
                <li>SHIVAM</li>
                <li>ODOILJ</li>
                <li>KROPMO</li>
                <li>24K_ZERO</li>
                <li>UNIQUEX</li>
              </ul>
            </div>{" "}
            <img
              src="https://www.yoox.com/images/items/13/13869442VW_14_f.jpg?impolicy=crop&width=306&height=390"
              alt=""
              width="190px"
            />
          </li>
          <img
            style={{borderRadius: "3rem",height:"480px"}}
            src="https://www.yoox.com/images/yoox80/banners/6825_17_PoloRalphLauren_W_Tris.jpg?634485886869569819#width=430&height=600"
            // width="172px"
            alt=""
          />
        </ul>
      </div>
    );
}