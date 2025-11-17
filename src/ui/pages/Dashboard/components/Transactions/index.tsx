import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MONTHS } from '../../../../../app/config/constants';
import { cn } from '../../../../../app/utils/cn';
import { currencyFormat } from '../../../../../app/utils/formatCurrency';
import { CategoryIcon } from '../../../../components/icons/categories/CategoryIcon';
import { FilterIcon } from '../../../../components/icons/FilterIcon';
import { TransactionsIcon } from '../../../../components/icons/TransactionsIcon';
import { SliderNavigation } from './SliderNavigation';
import { SliderOption } from './SliderOption';
import { useTransactionsController } from './useTransactionsController';

export function Transactions() {
  const { areValuesVisible } = useTransactionsController();

  return (
    <div className="bg-gray-100 h-full w-full rounded-2xl p-10 flex flex-col">
      <header>
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-2">
            <TransactionsIcon />
            <span className="text-sm text-gray-800 font-medium tracking-[-0.5px]">
              Transações
            </span>
            <ChevronDownIcon className="text-gray-900" />
          </button>

          <button>
            <FilterIcon />
          </button>
        </div>

        <div className="mt-6 relative">
          <Swiper slidesPerView={3} centeredSlides>
            <SliderNavigation />
            {MONTHS.map((month, index) => (
              <SwiperSlide key={month}>
                {({ isActive }) => (
                  <SliderOption
                    isActive={isActive}
                    month={month}
                    index={index}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </header>

      <div className="mt-4 space-y-2 flex-1 overflow-y-auto">
        <div className="bg-white p-4 rounded-2xl flex items-center justify-between gap-4">
          <div className="flex-1 flex items-center gap-3">
            <CategoryIcon type="expense" />

            <div className="font-bold tracking-[-0.5px]">
              <strong className="font-bold block tracking-[-0.5px]">
                Almoço
              </strong>
              <span className="text-sm text-gray-600">04/09/2025</span>
            </div>
          </div>
          <span
            className={cn(
              'text-red-800 font-medium tracking-[-0.5px]',
              !areValuesVisible && 'blur-md'
            )}
          >
            - {currencyFormat(1800.8)}
          </span>
        </div>

        <div className="bg-white p-4 rounded-2xl flex items-center justify-between gap-4">
          <div className="flex-1 flex items-center gap-3">
            <CategoryIcon type="income" />

            <div className="font-bold tracking-[-0.5px] block">
              <strong className="font-bold block tracking-[-0.5px]">
                Desenvolvimento API
              </strong>
              <span className="text-sm text-gray-600">04/09/2025</span>
            </div>
          </div>
          <span
            className={cn(
              'text-green-800 font-medium tracking-[-0.5px]',
              !areValuesVisible && 'blur-md'
            )}
          >
            {currencyFormat(2500)}
          </span>
        </div>
      </div>
    </div>
  );
}
