import styles from './Navbar.module.css';
export default function SkinCare() {
    return (
      <div
        style={{position: "absolute", left: "82px", margin: "15px"}}
        className="navbarAnim"
      >
        <ul className={styles.Floating}>
          <li>
            <div className={styles.Floating_heading}>BY ALL TYPE</div>
            <div className={styles.Floating_div}>
              <ul>
                <li>ACNE STUDIOS</li>
                <li>GCDS</li>
                <li>KENZO</li>
                <li>NIKE</li>
                <li>PRADA</li>
                <li>VERSACE</li>
                <li>GUCCI</li>
                <li>JIL SANDER</li>
              </ul>
              <ul>
                <li>LEVI'S</li>
                <li>MARNI</li>
                <li>8 BY YOOX</li>
                <li>TOMMY HILFIGER</li>
                <li>THOM BROWNE</li>
                <li>SALVATORE</li>
                <li>BURBERRY</li>
                <li>VALENTINO</li>
              </ul>
            </div>
            <img
              src="https://www.yoox.com/images/yoox80/banners/6825_1_Acne_W_Small.jpg?634485886601286852"
              alt=""
            />
            <p style={{marginLeft: "60px"}}> ACNE STUDIOS</p>
          </li>
          <li>
            <div className={styles.Floating_heading}>SHOES DESIGNERS</div>
            <div className={styles.Floating_div}>
              <ul>
                <li>SANTONI</li>
                <li>HIGH-TOPS</li>
                <li>COOL RUNNING</li>
                <li>HI GUYZ</li>
                <li>NEW CLASSICS</li>
                <li>BLACKHEADS & WHITE</li>
                <li>WONDERFUL WEDDINGS</li>
              </ul>
              <ul>
                <li>NEIL BARRETT</li>
                <li>NEW BALANCE</li>
                <li>COOL RUNNING</li>
                <li>PRADA</li>
                <li>SHIVAM</li>
                <li>COTTAAGOER</li>
                <li>MMOUDGIL</li>
              </ul>
            </div>
            <img
              style={{
                marginTop: "40px",
                width: "200px",
              }}
              src="https://www.yoox.com/images/yoox80/banners/6825_1_Marni_W_Small.jpg?634485886601286852"
              alt=""
            />
            <p style={{marginLeft: "80px"}}>MARNI</p>
          </li>
          <li>
            <div className={styles.Floating_heading}>BAUME & MERCIER</div>
            <div
              style={{display: "flex", flexDirection: "column"}}
              className={styles.Floating_div}
            >
              <img
                src="https://www.yoox.com/images/yoox80/banners/6825_2_BaumeMercier_DD_W.jpg?634485886601286852"
                alt=""
              />
            </div>
          </li>
        </ul>
      </div>
    );
}