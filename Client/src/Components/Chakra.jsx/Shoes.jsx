import styles from './Navbar.module.css';
export default function Perfumes() {
    return (
      <div
        style={{position: "absolute", left: "40rem", margin: "15px"}}
        className="navbarAnim"
      >
        <ul className={styles.Floating}>
       
          <li>   <li>CATEGORIES</li>
            <div className={styles.Floating_div}>
              <ul>
                <li>ANKLE BOOTS</li>
                <li>SNEAKERS</li>
                <li>PUMPS</li>
                <li>LOAFERS</li>
                <li>LACED SHOES</li>
                <li>SANDALS</li>
                <li>MULES AND CLOGS</li>
                <li>BALLET FLATS</li>
                <li>CHELSEA BOOTS</li>
              </ul>
            </div>
          </li>
        
            <img
              src="https://www.yoox.com/images/yoox80/banners/6825_1_fallchecklist_DD_W.jpg?634485886601286852"
              width="202px"
              alt=""
            />
        
        </ul>
      </div>
    );
}