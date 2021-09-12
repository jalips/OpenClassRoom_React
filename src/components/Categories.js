import '../styles/Categories.css'

function Category({ categories, selectedCategory, updateSelectedCategory }) {

    return (
        <div>
            <select
                className='lmj-categories-select'
                onChange={(event) => updateSelectedCategory(event.target.value)}>
                <option value=''>---</option>
                {categories.map((cat) => (
                    <option
                        value={cat} key={cat}>{cat}</option>
                ))}
            </select>
            <button
                onClick={() => updateSelectedCategory('')}
            >
                Réinitialiser
            </button>
        </div>
    )
}

export default Category
