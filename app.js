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
const featuresMB = document.querySelector('.features-mb-wrapper');
const companyMB = document.querySelector('.company-mb-wrapper');
const featuresChevronMB = document.getElementById('features-mb-chevron');
const companyChevronMB = document.getElementById('company-mb-chevron');

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
		featuresChevronMB.style.setProperty(
			'transform',
			'scale(1) translateY(0.1rem) rotate(-180deg)'
		);
		featureState = true;
	} else {
		mobileFeatureCollapsible.style.display = 'none';
		featuresChevronMB.style.setProperty('transform', 'scale(1) translateY(0.1rem) rotate(0)');
		featureState = false;
	}
});

companyMB.addEventListener('click', () => {
	if (companyState === false) {
		mobileCompanyCollapsible.style.display = 'flex';
		companyChevronMB.style.setProperty(
			'transform',
			'scale(1) translateY(0.1rem) rotate(-180deg)'
		);
		companyState = true;
	} else {
		mobileCompanyCollapsible.style.display = 'none';
		companyChevronMB.style.setProperty('transform', 'scale(1) translateY(0.1rem) rotate(0)');
		companyState = false;
	}
});

// Desktop DropDown Containers
const featuresDropdown = document.querySelector('.features-dropdown-container');
const features = document.querySelector('.features-wrapper');
const featuresChevron = document.getElementById('features-chevron');

const companyDropdown = document.querySelector('.company-dropdown-container');
const company = document.querySelector('.company-wrapper');
const companyChevron = document.getElementById('company-chevron');

// Desktop States
let desktopFeatureState = false;
let desktopCompanyState = false;

features.addEventListener('click', () => {
	if (desktopFeatureState === false) {
		featuresDropdown.style.display = 'flex';
		featuresChevron.style.setProperty(
			'transform',
			'scale(0.35) translateY(-12px) rotate(-180deg)'
		);
		desktopFeatureState = true;
	} else {
		featuresDropdown.style.display = 'none';
		featuresChevron.style.setProperty('transform', 'scale(0.35) translateY(-12px) rotate(0)');
		desktopFeatureState = false;
	}
});

company.addEventListener('click', () => {
	if (desktopCompanyState === false) {
		companyDropdown.style.display = 'flex';
		companyChevron.style.setProperty(
			'transform',
			'scale(0.35) translateY(-12px) rotate(-180deg)'
		);
		desktopCompanyState = true;
	} else {
		companyDropdown.style.display = 'none';
		companyChevron.style.setProperty('transform', 'scale(0.35) translateY(-12px) rotate(0)');
		desktopCompanyState = false;
	}
});

// Media query for heading
let heading = document.getElementById('hero-heading');
if (window.matchMedia('(min-width: 1024px)').matches) {
	heading.innerHTML = 'Make <br> remote work';
} else {
	heading.innerHTML = 'Make remote work';
}
