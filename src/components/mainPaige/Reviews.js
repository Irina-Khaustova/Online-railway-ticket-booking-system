export default function Reviews() {
    return (
        <div className="container reviews-container">
          
          
            <h2 className="reviews-title">отзывы</h2>
            <div className="reviews-content" >
                <div className="reviews-content-item">
                  <div className="reviews-content-img  img-1"></div>
                  <div className="reviews-content-text">
                    <h4>Екатерина Вольнова</h4>
                    <span>Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.</span>
                  </div>
                </div>
                <div className="reviews-content-item">
                <div className="reviews-content-img img-2"></div>
                <div className="reviews-content-text">
                    <h4>Евгений Стрыкало</h4>
                    <span>СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.</span>
                  </div>
                </div>
            </div>
            <div className="reviews-slider-container ">
            <div className="reviews-slider">
              <div className="reviews-slider-item"></div>
              <div className="reviews-slider-item"></div>
              <div className="reviews-slider-item"></div>
              <div className="reviews-slider-item"></div>
              <div className="reviews-slider-item"></div>
            </div>
            </div>
          </div>
      
    );
  }