import { Card } from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { results } from "./Cards";

import styles from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>
          <section className={styles.content__cardList}>
              {results.map((partner) => (
                  <Card
                      country={partner.country}
                      status={partner.status}
                      first_name={partner.first_name}
                      gender={partner.gender}
                      age={partner.age}
                      about={partner.about}
                      indicator={partner.indicator}
                      nativeLanguages={partner.native_languages}
                      foreignLanguages={partner.foreign_languages}
                  />
              ))}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
