
  const categoriesList = document.getElementById('categories');
  const categories = categoriesList.querySelectorAll('.item');

  categories.forEach(category => {
    const header = category.querySelector('h2').textContent;
    const items = category.querySelectorAll('ul > li').length;
    console.log(`Category: ${header}, Number of Elements: ${items}`);
  });

  const totalCategories = categories.length;
  console.log(`Total number of categories: ${totalCategories}`);