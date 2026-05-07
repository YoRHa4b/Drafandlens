import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ServiceCard from './ServiceCard.jsx';

export default function MarketingCarousel({ plans }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="marketing-carousel"
    >
      {plans.map((plan) => (
        <SwiperSlide key={plan.title}>
          <ServiceCard service={plan} compact />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
