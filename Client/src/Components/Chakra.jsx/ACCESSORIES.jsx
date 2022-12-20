import styles from './Navbar.module.css';
export default function ACCESSORIES() {

    return (
      <div
        style={{
          position: "absolute",
          left: "61rem",
          margin: "15px",
        }}
        className="navbarAnim"
      >
        <div style={{display:"flex"}}>
          <ul className={styles.Floating}>
            <li>
              <div className={styles.Floating_div}>
                <ul>
                  <li>HAND BAGS</li>
                  <li>BACKPACKS</li>
                  <li>JEWELRY</li>
                  <li>HATS</li>
                  <li>WATCHES</li>
                  <li>BELTS</li>
                  <li>WALLETS</li>
                  <li>LUGGAGE</li>
                  <li>EYEWEAR</li>
                </ul>
              </div>
            </li>
          </ul>
          <img
            width={"250px"} style={{borderRadius:"8px"}}
            src="https://www.yoox.com/images/yoox80/banners/6824_1_NewTrendAcc_DD_W.jpg?634485886601286852"
            alt=""
          />
        </div>
      </div>
    );
}