/**
 * SmartBox Sorting Engine
 * -----------------------
 * Determines whether a collection of numbered boxes can be
 * organized using the available reverse operation.
 */

/**
 * Checks whether the given sequence is already sorted
 * in non-decreasing order.
 *
 * @param {number[]} boxes
 * @returns {boolean}
 */
function isAlreadySorted(boxes) {
    for (let i = 1; i < boxes.length; i++) {
        if (boxes[i] < boxes[i - 1]) {
            return false;
        }
    }
    return true;
}

/**
 * Determines whether the box arrangement can be sorted
 * using the machine's reverse capability.
 *
 * @param {number[]} boxes - Current box arrangement.
 * @param {number} maxReverseLength - Maximum number of boxes
 *                                    the machine can reverse at once.
 * @returns {boolean}
 */
function canOrganizeBoxes(boxes, maxReverseLength) {

    // If the machine can reverse more than one box,
    // it can simulate adjacent swaps, making any
    // arrangement sortable.
    if (maxReverseLength > 1) {
        return true;
    }

    // Otherwise, no movement is possible.
    // The boxes must already be sorted.
    return isAlreadySorted(boxes);
}

/* ---------------- Example Usage ---------------- */

const warehouseBoxes = [6, 4, 2, 1];
const machineCapability = 4;

const canSort = canOrganizeBoxes(
    warehouseBoxes,
    machineCapability
);

console.log("Warehouse Boxes :", warehouseBoxes);
console.log("Machine Limit   :", machineCapability);
console.log(
    "Result          :",
    canSort ? "Sorting Possible ✅" : "Sorting Not Possible ❌"
);

module.exports = {
    canOrganizeBoxes,
    isAlreadySorted
};
