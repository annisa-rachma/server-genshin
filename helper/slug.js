function createSlug(name) {
    const slug = name.toLowerCase().split(' ').join('-')
    return slug
}

module.exports = {
    createSlug
}