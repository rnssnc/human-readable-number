module.exports = function toReadable(number) {
    const units = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tenners = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    function toReadableRecursion(num, str = "") {
        if (num == 0 && str.length > 0) return str;

        switch (String(num).length) {
            case 1:
                return (str += ` ${units[num]}`).trim();
            case 2:
                if (num < 20) return (str += ` ${units[num]}`).trim();
                else
                    return toReadableRecursion(
                        num % 10,
                        (str += ` ${tenners[Math.floor(num / 10) - 1]}`).trim()
                    );
            case 3:
                return toReadableRecursion(
                    num % 100,
                    units[Math.floor(num / 100)] + " hundred"
                );
        }
    }

    return toReadableRecursion(number);
};
