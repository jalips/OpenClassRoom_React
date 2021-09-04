import { plantList } from '../datas/plantList'


/**
 *
 * @param accumulator Array return at the end
 * @param currentValue Current element of array in loop
 * @returns {*}
 */
function reduceCategory(accumulator, currentValue){
    // If category present in array
    if(accumulator.includes(currentValue.category)){
        // Return the new array
        return accumulator
    }else{
        // Add new element in array
        return accumulator.concat(currentValue.category)
    }
}

function ShoppingList() {

    // v4
    // reduce("parcours le tableau avec la fonction", "tableau vide en valeur de base")
    const categoriesV4 = plantList.reduce(reduceCategory, [])

    // V3 same as v2 but with different syntax
    const categoriesV3 = plantList.reduce(
        function (acc, plant) {
            return reduceCategory(acc, plant)
        },
        []
    )

    // V2: With main function out
    const categoriesV2 = plantList.reduce(
        (acc, plant) =>
            reduceCategory(acc, plant),
        []
    )

    // V1: Openclassroom
    const categoriesV1 = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    return (
        <div>
            <ul>
                {categoriesV1.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul>
                {plantList.map((plant) => (
                    <li key={plant.id}>{plant.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList