const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const closeIconProductDetail = document.querySelector('.product-detail-close')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const productDetailContainer = document.querySelector('#productDetail')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)
closeIconProductDetail.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive')
  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive')
  }
  desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive')
  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive')
  }
  closeProductDetailAside()
  mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive')
  }

  const isProductDetailClosed =
    productDetailContainer.classList.contains('inactive')

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive')
  }

  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add('inactive')
  }

  shoppingCartContainer.classList.toggle('inactive')
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add('inactive')
  productDetailContainer.classList.remove('inactive')
}
function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive')
}

const productList = []
productList.push(
  {
    name: 'Bike',
    price: 120,
    image:
      'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    name: 'Bike',
    price: 120,
    image:
      'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    name: 'Bike',
    price: 120,
    image:
      'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  }
)

for (product of productList) {
  const productCard = document.createElement('div')
  productCard.classList.add('product-card')
  const productImage = document.createElement('img')
  productImage.setAttribute('src', product.image)
  productImage.addEventListener('click', openProductDetailAside)

  const productInfo = document.createElement('div')
  productInfo.classList.add('product-info')

  const productInfoDiv = document.createElement('div')

  const productPrice = document.createElement('p')
  productPrice.innerText = '$' + product.price
  const productName = document.createElement('p')
  productName.innerText = product.name

  productInfoDiv.appendChild(productPrice)
  productInfoDiv.appendChild(productName)

  const productInfoFigure = document.createElement('figure')
  const productImgCart = document.createElement('img')
  productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')

  productInfoFigure.appendChild(productImgCart)

  productInfo.appendChild(productInfoDiv)
  productInfo.appendChild(productInfoFigure)

  productCard.appendChild(productImage)
  productCard.appendChild(productInfo)
  cardsContainer.appendChild(productCard)
}
