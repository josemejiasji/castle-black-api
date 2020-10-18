const getNextId =  function (arr) {
    const sortedArr = arr.sort((itemA, itemB) => itemB.id - itemA.id);

    return sortedArr[0].id + 1;
}

module.exports = {
    getNextId,
}