const data = {
  '@context': 'https://schema.org',
  '@type': 'AccountingService',
  name: 'Clientfilingindia',
  image: 'https://clientfilingindia.com/favicon.ico',
  '@id': '',
  url: 'https://clientfilingindia.com/',
  telephone: '+91-983-294-9193',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '36/A',
    addressLocality: 'Kolkata',
    postalCode: '700054',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 22.545412,
    longitude: 88.356775,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
  sameAs: [
    'https://www.facebook.com/clientfilings',
    'https://in.pinterest.com/clientfilings/_created/',
    'https://www.linkedin.com/company/68479956/admin/',
    'https://clientfilingindia.com/',
  ],
};

export default data;
