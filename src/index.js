module.exports = function toReadable (number) {
//     const z = ['zero']
//   const zero = ['','one','two','three','four','five','six','seven','eight','nine'];
//   const ten = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
//   const twenty = ['', ' ','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
//   const point = ['hundred','thousand']

//   let num = number.toString().split('');

//   switch(num.length) {
//     case 1: //0-9
//         return zero[number];
//     case 2: //10-99
//         if(number < 20) {
//             return ten[number - 10];
//         } else {
//             return twenty[+num[0]] + twenty[1] + zero[+num[1]];
//         }
//     case 3: //100-999
//         return zero[+num[0]] + twenty[1] + point[0] + twenty[1] + twenty[+num[1]] + twenty[1] + zero[+num[2]];
    const zero = 'zero';
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const specials = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const bigs = ['hundred', 'thousand', 'million', 'billion'];

    //  0
    if (number === 0) {
        return zero;
    }

    const numStr = String(number);

    const numGroups = [];
    for (let i = numStr.length; i > 0; i -= 3) {
        numGroups.push(numStr.slice(Math.max(0, i - 3), i));
    }

    const groupWords = numGroups.map((group, index) => {
    const groupNum = Number(group);
    if (groupNum === 0) {
        return '';
    }
    const groupWords = [];
    const hundredsDigit = Math.floor(groupNum / 100);
    const tensDigit = Math.floor((groupNum % 100) / 10);
    const onesDigit = groupNum % 10;

    if (hundredsDigit !== 0) {
        groupWords.push(units[hundredsDigit], bigs[0]);
    }

    if (tensDigit === 1 && onesDigit !== 0) {
        groupWords.push(specials[onesDigit - 1]);
    } else if (tensDigit !== 0 || onesDigit !== 0) {
        if (tensDigit !== 0) {
            groupWords.push(tens[tensDigit]);
        }
        if (onesDigit !== 0) {
            groupWords.push(units[onesDigit]);
        }
    }

    if (index > 0 && groupNum !== 0) {
        groupWords.push(bigs[index]);
    }

    return groupWords.join(' ');
    });

    return groupWords.reverse().join(' ');
    }
