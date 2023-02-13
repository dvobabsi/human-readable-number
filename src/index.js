module.exports = function toReadable (number) {
    const z = ['zero']
  const zero = ['','one','two','three','four','five','six','seven','eight','nine'];
  const ten = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const twenty = ['', ' ','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  const point = ['hundred','thousand']

  let num = number.toString().split('');

  switch(num.length) {
    case 1: //0-9
        return zero[number];
    case 2: //10-99
        if(number < 20) {
            return ten[number - 10];
        } else {
            return twenty[+num[0]] + twenty[1] + zero[+num[1]];
        }
    case 3: //100-999
        return zero[+num[0]] + twenty[1] + point[0] + twenty[1] + twenty[+num[1]] + twenty[1] + zero[+num[2]];
  }
}
