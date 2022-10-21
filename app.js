// Mobile Menu Variables
const menuIcon = document.getElementById('menu-icon');
const menuCloseBtn = document.getElementById('close-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.overlay');

// Mobile Menu State
let menuActive = false;

// Mobile Menu Collapsibles
const mobileFeatureCollapsible = document.querySelector('.features-collapsible');
const mobileCompanyCollapsible = document.querySelector('.company-collapsible');
const featuresMB = document.querySelector('.features-mb');
const companyMB = document.querySelector('.company-mb');

// Item State
let featureState = false;
let companyState = false;

// Mobile Menu Function
menuIcon.addEventListener('click', () => {
	if (menuActive === false) {
		mobileMenu.style.display = 'block';
		mobileMenu.style.right = '0rem';
		overlay.style.opacity = '1';
		overlay.style.display = 'block';
		overlay.style.zIndex = '0';
		menuActive = true;
	}
});

menuCloseBtn.addEventListener('click', () => {
	if (menuActive === true) {
		mobileMenu.style.display = 'none';
		mobileMenu.style.right = '-24rem';
		overlay.style.opacity = '0';
		overlay.style.display = 'none';
		menuActive = false;
	}
});

// Mobile Menu inner collapsibles
featuresMB.addEventListener('click', () => {
	if (featureState === false) {
		mobileFeatureCollapsible.style.display = 'flex';
		featuresMB.style.setProperty('--contentafter', 'url(../images/icon-arrow-up.svg');
		// ^^ changes the chevron image for ::after
		featureState = true;
	} else {
		mobileFeatureCollapsible.style.display = 'none';
		featuresMB.style.setProperty('--contentafter', 'url(../images/icon-arrow-down.svg');
		featureState = false;
	}
});

companyMB.addEventListener('click', () => {
	if (companyState === false) {
		mobileCompanyCollapsible.style.display = 'flex';
		companyMB.style.setProperty('--contentafter', 'url(../images/icon-arrow-up.svg');
		companyState = true;
	} else {
		mobileCompanyCollapsible.style.display = 'none';
		companyMB.style.setProperty('--contentafter', 'url(../images/icon-arrow-down.svg');
		companyState = false;
	}
});

// Desktop DropDown Containers
const featuresDropdown = document.querySelector('.features-dropdown-container');
const features = document.querySelector('.features');

const companyDropdown = document.querySelector('.company-dropdown-container');
const company = document.querySelector('.company');

// Desktop States
let desktopFeatureState = false;
let desktopCompanyState = false;

features.addEventListener('click', () => {
	if (desktopFeatureState === false) {
		featuresDropdown.style.display = 'flex';
		features.style.setProperty('--contentafter', 'url(../images/icon-arrow-up.svg');
		desktopFeatureState = true;
	} else {
		featuresDropdown.style.display = 'none';
		features.style.setProperty('--contentafter', 'url(../images/icon-arrow-down.svg');
		desktopFeatureState = false;
	}
});

company.addEventListener('click', () => {
	if (desktopCompanyState === false) {
		companyDropdown.style.display = 'flex';
		company.style.setProperty('--contentafter', 'url(../images/icon-arrow-up.svg');
		desktopCompanyState = true;
	} else {
		companyDropdown.style.display = 'none';
		company.style.setProperty('--contentafter', 'url(../images/icon-arrow-down.svg');
		desktopCompanyState = false;
	}
});

// Media query
let heading = document.getElementById('hero-heading');
if (window.matchMedia('(min-width: 1024px)').matches) {
	heading.innerHTML = 'Make <br> remote work';
} else {
	heading.innerHTML = 'Make remote work';
}
