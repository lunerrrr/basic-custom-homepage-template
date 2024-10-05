const redirectToGoogle = (query) => {
    // Redirect to google with the query
    window.location.href = 'https://www.google.com/search?q=' + query;
};

document.getElementById('searchForm').addEventListener('submit', function(event) {
    // Get the input and save it as a variable (query)
    event.preventDefault(); // Prevent the default form submission
    const query = document.querySelector('input[name="query"]').value;
    console.log('Search query:', query);

    // Redirect to google with the query
    redirectToGoogle(query);
});