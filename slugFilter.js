//Filter to make strings hyphen separated and url friendly
app.filter('slugify', function () {
    return function (input) {
        if (!input)
            return;

        var slug = input.toLowerCase().trim();

        // replace invalid chars with spaces
        slug = slug.replace(/[^a-z0-9\s-]/g, '');

        // replace multiple spaces or hyphens with a single hyphen
        slug = slug.replace(/[\s-]+/g, '-');

        return slug;
    };
});
