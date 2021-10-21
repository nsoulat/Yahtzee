export default class Calcul {

    // sera appelé par chacune des figures qui sont "clickables" 
    // des = { 0: value, 1: value, ..., 4: value }
    compute(des, calculType, detailledCalcul, defaultValue) {
        let count = 0;
        switch (calculType) {
            case Calcul.SumOf: {
                let digit = parseInt(detailledCalcul, 10);
                for (let i = 0; i < 5; i++) {
                    if (des[i] === digit) {
                        count += digit;
                    }
                }
                break;
            }
            case Calcul.Sum:
                if (this.hasIf(detailledCalcul)) {
                    if (this.computeIf(detailledCalcul.substring(3))) {
                        for (let i = 0; i < 5; i++) {
                            count += des[i];
                        }
                    }
                }
                break;
            case Calcul.Fixed:
                if (this.hasIf(detailledCalcul)) {
                    if (this.computeIf(detailledCalcul.substring(3))) {
                        count = defaultValue;
                    }
                }
                break;
            default:
                break;
        }
        return count;
    }

    hasIf(detailledCalcul) {
        return detailledCalcul.substring(0, 2) === "if";
    }

    computeIf(detailledCalculWithoutIf, des) {
        let actions = detailledCalculWithoutIf.split(" ");
        switch (actions[0]) {
            case 'brelan':
                return this.isBrelan(des);
            case 'carre':
                return this.isCarre(des);
            case 'yahtzee':
                return this.isYahtzee(des);
            case 'grandeSuite':
                return this.isGrandeSuite(des);
            case 'petiteSuite':
                return this.isPetiteSuite(des);
            case 'full':
                return this.isFull(des);
            default:
                console.log(`if non géré ${actions}`);
        }
        return false;
    }

    isBrelan(des) { return this.hasSameNumbers(des, 3); }
    isCarre(des) { return this.hasSameNumbers(des, 4); }
    isYahtzee(des) { return this.hasSameNumbers(des, 5); }
    isFull(des) {
        let count = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
        let has3 = false;
        let has2 = false;

        for (let i = 0; i < 5; i++) {
            count[des[i]]++;
        }
        for (let i = 0; i < 6; i++) {
            if (count[des[i]] === 2) { has2 = true; }
            if (count[des[i]] === 3) { has3 = true; }
        }
        return has2 && has3;
    }
    isPetiteSuite(des) { return this.isSuite(des, 4); }
    isGrandeSuite(des) { return this.isSuite(des, 5); }


    hasSameNumbers(des, nb) {
        let count = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
        let max = 0;

        for (let i = 0; i < 5; i++) {
            count[des[i]]++;
            if (count[des[i]] > max) { max = count[des[i]]; }
        }
        return max >= nb;
    }

    isSuite(des, nb) {
        let count = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
        let suite = 0;

        for (let i = 0; i < 5; i++) {
            count[des[i]]++;
        }
        for (let i = 0; i < 6; i++) {
            if (count[des[i]] > 0) {
                suite++;
            }
            else {
                suite = 0;
            }
        }
        return suite >= nb;
    }
}

Calcul.SumOf = "sumOf";
Calcul.Sum = "sum";
Calcul.Total = "total";
Calcul.Fixed = "fixed";
Calcul.Automatic = "automatic";