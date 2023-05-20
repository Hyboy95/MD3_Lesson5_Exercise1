function convertNumber(number) {
    if (number < 0 || number > 999 || isNaN(number)) {
        return 'Input number invalid';
    }
    const ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    
    if (number === 0) {
        return ones[0];  // Trường hợp đặc biệt cho số 0
    }
    
    let result = "";
    if (number >= 100) {
        result += ones[Math.floor(number / 100)] + " hundred ";  // Đọc hàng trăm
    }
    
    number %= 100;
    if (number >= 10 && number <= 19) {
        result += teens[number % 10];  // Đọc hàng chục đặc biệt (từ 10 đến 19)
    } else {
        if (number >= 20) {
        result += tens[Math.floor(number / 10)];  // Đọc hàng chục (lớn hơn hoặc bằng 20)
        }
        if (number % 10 > 0) {
        result += ones[number % 10];  // Đọc hàng đơn vị (nếu có)
        }
    }
    
    return result;
}

module.exports = {convertNumber};

