function formatString(value, divider) {
  if (value.length <= 2) {
    for (let i = 2; i > value.length; i--) {
      value = '0' + value;
    }
    value = '0' + divider + value;
  } else {
    value =
      value.slice(0, value.length - 2) +
      divider +
      value.slice(value.length - 2, value.length);
  }
  return value;
}

const Price = ({ value, divider = ',', locale = 'tr-TR', symbol = '₺' }) => {
  let formattedValue;
  if (typeof value === 'string') {
    formattedValue = formatString(value, divider);
  } else if (typeof value === 'number') {
    formattedValue = value.toLocaleString(locale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  } else {
    formattedValue = '';
  }
  let result = symbol + formattedValue;

  return <span>{result}</span>;
};

export default Price;
