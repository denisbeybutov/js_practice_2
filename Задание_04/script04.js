const categories = {
    name: "Electronics",
    subcategories: [
      {
        name: "Phones",
        subcategories: [
          { name: "Smartphones", subcategories: [] },
          { name: "Feature Phones", subcategories: [] }
        ]
      },
      {
        name: "Computers",
        subcategories: [
          { name: "Laptops", subcategories: [] },
          { name: "Desktops", subcategories: [] }
        ]
      }
    ]
  }

function findCategory(findName, tree) {
    if (tree.name == findName) return tree

    if(!tree.subcategories || tree.subcategories.length === 0) {return null}
    
    for(let item of tree.subcategories) {
        const res = findCategory(findName, item)
        if(res) return res
    }

    return null
}

let cat = findCategory("Desktops", categories)
console.log("cat: ", cat)
