import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.css';
import { AccountCard } from './AccountCard';
import { SliderNavigation } from './SliderNavigation';
import { useAccountsController } from './useAccountsController';

export function Accounts() {
  const [showAmount, setShowAmount] = useState(false);
  const { sliderState, setSliderState, windowWidth } = useAccountsController();

  return (
    <div className="flex flex-col bg-teal-900 h-full w-full rounded-2xl md:p-10 px-4 py-8">
      <div>
        <span className="text-white tracking [-0.5px] block">Saldo total</span>

        <div className="flex items-center gap-2">
          <strong className="text-2xl tracking-[-1px] text-white block">
            R$ 1000,00
          </strong>

          {showAmount ? (
            <button
              className="cursor-grab w-8 h-8 flex items-center justify-center"
              onClick={() => setShowAmount(!showAmount)}
            >
              <EyeOpenIcon className="text-white" />
            </button>
          ) : (
            <button
              className="cursor-grabbing w-8 h-8 flex items-center justify-center"
              onClick={() => setShowAmount(!showAmount)}
            >
              <EyeClosedIcon className="text-white" />
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col flex-1 justify-end mt-10 md:mt-0">
        <div>
          <Swiper
            spaceBetween={16}
            slidesPerView={windowWidth >= 500 ? 2.1 : 1.2}
            onSlideChange={(swiper) => {
              setSliderState({
                isBeginning: swiper.isBeginning,
                isEnd: swiper.isEnd,
              });
            }}
          >
            <div
              className="flex items-center justify-between mb-4"
              slot="container-start"
            >
              <strong className="text-white tracking-[-1px] text-lg font-bold">
                Minhas contas
              </strong>

              <SliderNavigation
                isBeginning={sliderState.isBeginning}
                isEnd={sliderState.isEnd}
              />
            </div>

            <SwiperSlide>
              <AccountCard
                balance={1000.8}
                color="#7950f2"
                name="Nubank"
                type="CASH"
              />
            </SwiperSlide>

            <SwiperSlide>
              <AccountCard
                balance={387.8}
                color="#333"
                name="XP"
                type="INVESTMENT"
              />
            </SwiperSlide>

            <SwiperSlide>
              <AccountCard
                balance={387.8}
                color="#0f0"
                name="Carteira"
                type="CHECKING"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
