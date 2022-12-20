import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import styles from "../componets/Css/Catagories.module.css";
export default function Catagories() {
    const redirect = useNavigate();
    return (
      <Box>
        <div className={styles.heading}>CATEGORIES</div>
        <div className={styles.container}>
          <div className={styles.same} onClick={() => redirect("")}>
            Shop All
          </div>
          <div className={styles.same}>New Arrivals</div>
          <div className={styles.same} onClick={() => redirect("")}>
            Bestsellers
          </div>
          <Accordion allowMultiple className={styles.box}>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" onClick={() => redirect("")}>
                    Clothing
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        By Product Type
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <li>All Types</li>
                    <li>Products</li>
                    <li>Shoes</li>
                    <li>Shirts</li>
                    <li>T-shirts</li>
                    <li>EyeWear</li>
                    <li>Jeans</li>
                    <li>Trousers</li>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        By Designers
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <li>Gucci</li>
                    <li>Gopler</li>
                    <li>Ageing</li>
                    <li>Nike</li>
                    <li>Saamnths</li>
                    <li>Adidas</li>
                    <li>Ropjs</li>
                    <li>Moudgil</li>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        By Inspiration
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <li>Ankle Boots</li>
                    <li>Mules</li>
                    <li>Flats</li>
                    <li>Hi Guyz</li>
                  </AccordionPanel>
                </AccordionItem>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" onClick={() => redirect("")}>
                    YooXygen
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        By Designers
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <li>Alighieri X Yoox</li>
                    <li>REthink</li>
                    <li>Shampoo</li>
                    <li>VEJA</li>
                    <li>KArl</li>
                    <li>CAra</li>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        8 By Yoox
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <li>8 By my Side</li>
                    <li>FAll</li>
                    <li>New Balance</li>
                    <li>Furla</li>
                  </AccordionPanel>
                </AccordionItem>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" onClick={() => redirect("")}>
                    Companies
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Insipiration
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <li>A Cool Touch</li>
                    <li>Land Of Wood</li>
                    <li>Wonderful Weddings</li>
                    <li>Hii Guyz</li>
                  </AccordionPanel>
                </AccordionItem>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" onClick={() => redirect("")}>
                    Accessories & Bags
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <li></li>
                <li>Handbags</li>
                <li>BAckpacks</li>
                <li>Jewelry</li>
                <li>Watches</li>
                <li>Hats</li>
                <li>Eyewear</li>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <div className={styles.same}>Build a Box</div>
        </div>
      </Box>
    );
}