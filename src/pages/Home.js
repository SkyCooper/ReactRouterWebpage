import Subscribe from "../components/subscribe/Subscribe";
import Card from "../components/card/Card";
import data from "../data/data";

const Home = () => {
  return (
    <>
      <div className="root">
        <section id="showcase">
          <div className="container title">
            <h1>Professional Web Design</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              luctus ipsum, rhoncus semper magna. Nulla nec magna sit amet sem
              interdum condimentum.
            </p>
          </div>
        </section>
        <Subscribe />
        <section id="boxes">
          <div className="container">
            {data.map((item, index) => {
              return <Card key={index} {...item} />;
            })}

            {/* //*projede data.js isimli bir dosya yoktu, ben hazırladım ve onun map yapıp yukarıdaki gibi her objeyi card componentine yollayarak çoğalttım. 
            
            //? Diğer bir yöntem olarak aşağıdaki gibi her karta ayrı props yollanarak da yapılabilirdi. bunun için resimler bu sayfaya import edilmesi gerekli ve bu yukarıda benim body olarak tanımladığım resimlerin altında yazan açıklamalar aynı olur. */}

            {/* //? <Card url="html" src={htmlImg} title="HTML5 Markup" />
            //? <Card url="css" src={cssImg} title="CSS Styling" />
            //? <Card url="brush" src={brushImg} title="Graphic Design" /> */}

          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
