export default {
    //HEADER MODULE
    HEADER_TITLE: '//h1[@class="TopBar__logo___3-82j"]',
    LOGIN_CTA: '//button[@class="NavButton__nav-button___34wHC"]',
    
    //DESTINATION SELECTION MODULE
    DEST_MODULE_TITLE: '//h1[@class="Hero__headline-1___3C6vA"]',
    DEST_MODULE_BYLINE: '//h2[@class="Hero__headline-2___1awT4"]',
    DEPARTURE_PICKER: '(//input[@class="theme__inputElement___27dyY theme__inputElement___1oBGc WhiteDatePicker__inputElement___3d9uL"])[1]',
    RETURN_PICKER: '(//input[@class="theme__inputElement___27dyY theme__inputElement___1oBGc WhiteDatePicker__inputElement___3d9uL"])[2]',
    PASSENGER_ADULT_PICKER: '(//input[contains(@class,"WhiteDropDown__inputInputElement___2wTPU")])[1]',
    PASSENGER_CHILD_PICKER: '(//input[contains(@class,"WhiteDropDown__inputInputElement___2wTPU")])[2]',
    SELECT_CTA: '(//button[contains(@class,"CTAButton__button___2nXRo")])[1]',

    //DESTINATION FILTER MODULE
    FILTER_MODULE_TITLE: '//h2[@class="Gallery__headline-1___2lHj5"]',
    FILTER_MODULE_BYLINE: '//h3[@class="Gallery__headline-2___3amRj"]',
    FILTER_LAUNCH_SITE: '(//input[@class="theme__inputElement___27dyY BlackDropDown__inputInputElement___3hD6U theme__filled___1UI7Z"])[1]',
    FILTER_PLANET_COLOR: '(//input[@class="theme__inputElement___27dyY BlackDropDown__inputInputElement___3hD6U theme__filled___1UI7Z"])[2]',
    FILTER_PRICE_RANGE: '//div[@class="Box__box___2XzJ2 Gallery__price-filter___30IUc"]',

    //DESTINATION CATALOG MODULE
    CATALOG: '//div[@class="theme__cardMedia___3WTvG GalleryItem__cardMedia___2yVRm theme__wide___3c58S"]',
    CATALOG_CTA: '(//button[contains(@class,"CTAButton__button___2nXRo")])[2]',

    //CHECKOUT MODULE
    FORM_TITLE: '//h2[@class="Checkout__headline-1___2KQaR"]',
    FORM_NAME_INPUT: '(//input[@class="theme__inputElement___27dyY"])[1]',
    FORM_EMAIL_INPUT: '(//input[@class="theme__inputElement___27dyY"])[2]',
    FORM_SSN_INPUT: '(//input[@class="theme__inputElement___27dyY"])[3]',
    FORM_PHONE_INPUT: '(//input[@class="theme__inputElement___27dyY"])[4]',
    FORM_FILE_UPLOAD: '#',

    //ORDER SUMMARY MODULE
    ORDER_SUMMARY_TITLE: '//h3[@class="OrderSummary__headline-2___2JUYV"]',
    DATE_ELEMENT: '//h3[@class="flexboxgrid__col-xs-7___3o2m-"]',
    DATE_VALUE: '(//div[@class="flexboxgrid__col-xs-5___1HkK5"])[1]',
    TRAVELER_ELEMENT: '//div[@class="flexboxgrid__col-xs-7___3o2m-"]',
    TRAVELER_VALUE: '(//div[@class="flexboxgrid__col-xs-5___1HkK5"])[2]',
    PROMO_CODE_INPUT: '(//input[@class="theme__inputElement___27dyY"])[5]',
    PROMO_CODE_CTA: '(//button[contains(@class,"CTAButton__button___2nXRo")])[3]',
    TERMS_CHECKBOX: '//label[@class="theme__field___14tiU"]',
    TOTAL_VALUE: '//div[@class="OrderSummary__price___30Qjx"]',
    SUBMIT_CTA: '(//button[contains(@class,"CTAButton__button___2nXRo")])[4]',

    //PLANET DETAILS MODULE
    PLANET_DETAILS_TITLE: '//h1[@class="Climate__headline-1___pmwAe"]',
    PLANET_DETAILS_BYLINE: '//h2[@class="Climate__headline-2___3K6hI"]',
    PLANET_DETAILS_IMAGE: '//div[@class="recharts-wrapper"]',

    //LOGIN MODULE
    LOGIN_FORM_TITLE: '//h2[@class="Login__headline-1___qo4Tz"]',
    LOGIN_FORM_USERNAME_INPUT: '(//input[@class="theme__inputElement___27dyY"])[1]',
    LOGIN_FORM_PASSWORD_INPUT: '(//input[@class="theme__inputElement___27dyY"])[2]',
    LOGIN_FORM_SUBMIT_CTA: '//button[contains(@class,"LoginButton__primary___38GOe")]',
    LOGIN_FORM_CANCEL_CTA: '//button[contains(@class,"LoginButton__accent___hdTFW")]',
    LOGIN_ERROR_1: '(//span[@class="theme__error___3ilni"])[1]',
    LOGIN_ERROR_2: '(//span[@class="theme__error___3ilni"])[2]',

    //FOOTER MODULE
    SOCIAL_LINKS: '//div[@class="Box__box___2XzJ2 Footer__icons-box___3_hF7"]',
    CREDITS: '//p[@class="Footer__info___2_hgj"]',
    TOP_LINK: '//span[contains(.,"Back to top")]'
}