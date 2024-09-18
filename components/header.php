
  <div class="container">
      <div class="nav flex">
        <div class="logo nav__logo flex">
          <img src="./../img/svg/logo.svg" alt="лого аренда квартир 59">
        </div>
        <nav class="nav__menu nav-menu flex">
          <div class="nav-menu__inner flex">
            <input class="nav-menu__toggle" id="toggle" type="checkbox"/>
            <label class="nav-menu__btn flex" for="toggle">
              <span></span>
            </label>
            <div id="overlay"></div>
            <ul class="nav-menu__lists flex">
              <li class="nav-menu__item"><a class="nav-menu__link" href="./../index.php">Главная</a></li>
              <li class="nav-menu__item"><a class="nav-menu__link" href="./../cart-item.php">Квартиры</a></li>
              <li class="nav-menu__item"><a class="nav-menu__link" href="#contact-us">Контакты</a></li>
              <li class="nav-menu__item"><a class="nav-menu__link" href="#about-us">О нас</a></li>
            </ul>
          </div>
        </nav>
        <div class="nav__contacts contacts flex-align">
          <a class="nav__contacts-email contacts__email flex-align" href="mailto:mail@yandex.ru">
            <span class="nav__contacts-email-icon contacts__email-icon flex-align">
              <img src="./../img/svg/email-blue.svg" alt="Иконка почта">
            </span>
            <p class="nav__contacts-email-text contacts__email-text">mail@yandex.ru</p>
          </a>
          <a class="nav__contacts-tel contacts__tel flex-align"  href="tel:+79197142500">
            <span class="nav__contacts-tel-icon contacts__tel-icon flex-align">
              <img src="./../img/svg/Phone-blue.svg" alt="Иконка телефон">
            </span>
            <p class="nav__contacts-tel-text contacts__tel-text">+7 (950) 444-45-44</p>
          </a>
        </div>
        <button class="btn nav__btn" id="modal-open">
          <p class="nav__btn-text" >Заказать звонок</p>
          <span class="nav__btn-icon">
            <img src="./../img/svg/gui_operator_icon_157620.svg" alt="icon call operator">
          </span>
        </button>
        <div class="nav__modal flex" id="modal">
          <button class="nav__modal-btn-close-inner flex" id="modal-close">
            <span class="nav__modal-btn-close"></span>
          </button>
          <h3 class="nav__modal-title title">Заказать звонок</h3>
          <p class="nav__modal-text">Оставьте заявку и мы свяжемся с Вами в ближайшее время!</p>
          <form class="nav__form form flex">
            <div class="nav__form-group form-group">
              <input class="nav__form-input form-input" type="text" name="name" id="name" placeholder="Имя">
            </div>
            <div class="nav__form-group form-group">
              <input class="nav__form-input form-input" type="tel" name="phone" id="phone" placeholder="Телефон">
            </div>
          </form>
          <a class="nav__modal-btn btn" href="#">Отправить</a>
        </div>
      </div>
    </div>
