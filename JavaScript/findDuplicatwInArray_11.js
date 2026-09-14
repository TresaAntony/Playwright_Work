function findDuplicate() {

    let num = [56, 78, 90, 23, 90, 76, 43, 56]

    for (let i = 0; i < num.length; i++) {
        const element1 = num[i];

        for (let j = i + 1; j < num.length; j++) {
            const element2 = num[j];
            if (element1 === element2) {
                console.log("Duplicate number is :", element1)
            }

        }

    }
}
findDuplicate()