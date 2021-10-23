// sera appelé par chacune des figures qui sont "clickables" 
// des = { 0: value, 1: value, ..., 4: value }
export function compute(des, calculType, detailledCalcul, defaultValue) {
    let count = 0;
    switch (calculType) {
        case Calcul.SumOf: {
            let digit = parseInt(detailledCalcul, 10);
            for (let i = 0; i < 5; i++) {
                if (des[i] === digit) {
                    count += digit;
                }
            } 
        }
            break;
        case Calcul.Sum: {
            let bool = hasIf(detailledCalcul);
            if (!bool || (bool && computeIf(detailledCalcul.substring(3), des))) {
                    for (let i = 0; i < 5; i++) {
                        count += des[i];
                    }
                }
            }
            break;
        case Calcul.Fixed: {
            let bool = hasIf(detailledCalcul);
            if (!bool || (bool && computeIf(detailledCalcul.substring(3), des))) {
                   count = defaultValue;
                }
            }
            break;
        default:
            break;
    }
    return count;
}

export function computeAutomatic(detailledCalcul, defaultValue, comparison) {
    let bool = hasIf(detailledCalcul);
    if (!bool || (bool && computeIfAutomatic(detailledCalcul.substring(3), comparison))) {
        return defaultValue;
    }
    return 0;
}

function hasIf(detailledCalcul) {
    return detailledCalcul.substring(0, 2) === "if";
}

function computeIf(detailledCalculWithoutIf, des) {
    let actions = detailledCalculWithoutIf.split(" ");
    switch (actions[0]) {
        case 'brelan':
            return isBrelan(des);
        case 'carre':
            return isCarre(des);
        case 'yahtzee':
            return isYahtzee(des);
        case 'grandeSuite':
            return isGrandeSuite(des);
        case 'petiteSuite':
            return isPetiteSuite(des);
        case 'full':
            return isFull(des);
        default:
            console.log(`if non géré: ${actions[0]}`);
    }
    return false;
}

function computeIfAutomatic(detailledCalculWithoutIf, comparison) {
    let actions = detailledCalculWithoutIf.split(" ");
    switch (actions[0]) {
        case 'sup':
            return comparison > parseInt(actions[1], 10);
        default:
            console.log(`if automatic non géré: ${actions[0]}`)
    }
    return false;

}

function isBrelan(des) { return hasSameNumbers(des, 3); }
function isCarre(des) { return hasSameNumbers(des, 4); }
function isYahtzee(des) { return hasSameNumbers(des, 5); }
function isFull(des) {
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
function isPetiteSuite(des) { return isSuite(des, 4); }
function isGrandeSuite(des) { return isSuite(des, 5); }


function hasSameNumbers(des, nb) {
    let count = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    let max = 0;

    for (let i = 0; i < 5; i++) {
        count[des[i]]++;
        if (count[des[i]] > max) { max = count[des[i]]; }
    }
    return max >= nb;
}

function isSuite(des, nb) {
    let count = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    let suite = 0;

    for (let i = 0; i < 5; i++) {
        count[des[i]]++;
    }
    for (let i = 1; i < 7; i++) {
        if (count[i] > 0) {
            suite++;
            if (suite >= nb) { return true; }
        }
        else {
            suite = 0;
        }
    }
    return false;
}

export default class Calcul {

}

Calcul.SumOf = "sumOf";
Calcul.Sum = "sum";
Calcul.Total = "total";
Calcul.Fixed = "fixed";
Calcul.Automatic = "automatic";

