import { Link } from "react-router-dom"
import { facebook, instagram, location, phone, pizza } from "../../assets"

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto lg:w-11/12">
      <div className="flex flex-wrap justify-between p-4 gap-y-3">
        <div className="flex flex-col justify-between">
          <div className="z-0 flex gap-4">
            <img src={pizza} alt="" />
            <h3 className="text-xl font-semibold">Куда пицца</h3>
          </div>
        </div>
        <div>
          <h3 className="mb-1 text-xl font-semibold">Куда пицца</h3>
          <ul>
            <li className="py-2 text-base">
              <Link className="hover:text-blue-400" hrefLang="#">
                О компании
              </Link>
            </li>
            <li className="py-2 text-base">
              <Link className="hover:text-blue-400" hrefLang="#">
                Пользовательское соглашение
              </Link>
            </li>
            <li className="py-2 text-base">
              <Link className="hover:text-blue-400" hrefLang="#">
                Условия гарантии
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-1 text-xl font-semibold">Помощь</h3>
          <ul>
            <li className="py-2 text-base">
              <Link className="hover:text-blue-400" hrefLang="#">
                Ресторан
              </Link>
            </li>
            <li className="py-2 text-base">
              <Link className="hover:text-blue-400" hrefLang="#">
                Контакты
              </Link>
            </li>
            <li className="py-2 text-base">
              <Link className="hover:text-blue-400" hrefLang="#">
                Поддержка
              </Link>
            </li>
            <li className="py-2 text-base">
              <Link className="hover:text-blue-400" hrefLang="#">
                Отследить заказ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-1 text-xl font-semibold">Контакты</h3>
          <ul>
            <li className="flex items-center gap-2 my-3 text-base cursor-pointer hover:text-blue-500">
              <img className="h-4" src={phone} alt="" />
              <p>+7 (926) 223-10-11</p>
            </li>
            <li className="flex items-center gap-2 my-3 text-base cursor-pointer hover:text-blue-500">
              <img className="h-4" src={location} alt="" />
              <p>Москва, ул. Юных Ленинцев, д.99</p>
            </li>
            <li className="flex items-center gap-2 my-3 text-base cursor-pointer">
              <div className="flex items-center gap-2 hover:text-blue-700">
                <img className="h-4" src={facebook} alt="" />
                <p>Facebok</p>
              </div>
              <div className="flex items-center gap-2 hover:text-pink-500">
                <img className="h-4" src={instagram} alt="" />
                <p>Instagram</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <p className="pb-3 text-xs">© Copyright 2021 — Куда Пицца</p>
    </div>
    </footer>
  )
}

export default Footer