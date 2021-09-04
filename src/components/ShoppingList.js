import { plantList } from '../datas/plantList'
import CareScale from './CareScale'
import '../styles/ShoppingList.css'

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

function reduceCategoryWithTernary(accumulator, currentValue){
    return accumulator.includes(currentValue.category) ? accumulator : accumulator.concat(currentValue.category)
}

function ShoppingList() {

    // V4: Same as v2 & v3 but with different syntax
    const categoriesV4 = plantList.reduce(
        reduceCategory, // "parcours le tableau avec la fonction"
        [] // "tableau vide en valeur de base pour accumulator"
    )

    // V3: Same as v2 but with function out
    const categoriesV3 = plantList.reduce(
        function (acc, plant) {
            return reduceCategoryWithTernary(acc, plant)
        },
        []
    )

    // V2: Same as v1 but with different syntax
    const categoriesV2 = plantList.reduce(
        function (acc, plant) {
            return acc.includes(plant.category) ? acc : acc.concat(plant.category)
        },
        []
    )

    // V1: Openclassroom
    const categoriesV1 = plantList.reduce(
        (acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    return (
        <div>
            <ul>
                {categoriesV1.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map((plant) => (
                    <li key={plant.id} className='lmj-plant-item'>
                        {plant.name}
                        {plant.isBestSale ? <span>🔥</span> : null}
                        {plant.isBestSale && <span>🔥</span>}
                        {plant.isBestSale || plant.category === "classique" ? <span>👎</span> : null}
                        {plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
                        <CareScale careType='water' scaleValue={plant.water} />
                        <CareScale careType='light' scaleValue={plant.light} />
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default ShoppingList