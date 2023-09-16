import { CiLocationOn } from "react-icons/ci";
import { BsFillPersonFill } from "react-icons/bs";
const HeaderTop = () => {
  return (
    <div className="">
      <div className="grid grid-cols-12 ">
        <div className="col-span-7 flex gap-4 md:gap-8 items-center header-top-left">
          <div className="flex  items-center gap-2 ">
            <CiLocationOn className="text-xl text-primary" />
            <select
              name="city"
              id="city"
              className="py-1 px-2 border-[1px] border-gray-300 rounded-md"
            >
              <option value="москва">Москва</option>
              <option value="казан">Казан</option>
              <option value="сан-петер">Сан Петр</option>
              <option value="балей">Балей</option>
            </select>
          </div>
          <p className="header-text">Проверить адрес</p>
          <p className="header-text flex items-center gap-1">
            Среднее время доставки*: <span className="font-bold">00:24:19</span>
          </p>
        </div>
        <div className="header-top-right col-span-5 flex gap-4 md:gap-8 items-center  justify-end">
          <p className="header-text">Время работы: с 11:00 до 23:00</p>
          <div className="flex gap-2 items-center">
            <BsFillPersonFill className="text-xl text-primary" />
            <p className="header-text">Войти в аккаунт</p>
          </div>
        </div>
      </div>
      <div className="border-[1px] w-full border-grayColor mt-3"></div>
    </div>
  );
};

export default HeaderTop;
