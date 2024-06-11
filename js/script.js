$(document).ready(function() {
    $("#searchButton").click(function() {
        const characterName = $("#characterName").val();

        $.ajax({
            url: 'api.php',
            method: 'GET',
            data: { nameStartsWith: characterName },
            dataType: 'json',
            success: function(data) {
                displayResults(data.data.results);
            },
            error: function(error) {
                console.error('Error:', error);
                $("#results").html('<p>Error al obtener los datos.</p>');
            }
        });
    });

    function displayResults(characters) {
        let html = '';
        if (characters.length === 0) {
            html = '<p>No se encontraron personajes.</p>';
        } else {
            html = '<ul>';
            characters.forEach(character => {
                html += `<li>${character.name}</li>`;
            });
            html += '</ul>';
        }
        $("#results").html(html);
    }
});
