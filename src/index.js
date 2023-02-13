module.exports = function toReadable (number) {
  const zero = ['zero','one','two','three','four','five','six','seven','eight','nine'];
  const ten = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const twenty = ['', ' ','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  const point = ['hundred','thousand']

  let num = number.toString();

  switch(num.length) {
    case 1: //0-9
        return zero[number];
    case 2: //10-99
        if(number < 20) {
            return ten[number - 10];
        } else {
            return twenty[number[0]] + twenty[1] + zero[number[1]];
        }
    case 3: //100-999
        return `nine hundred nineteen nine`;
  }
}
