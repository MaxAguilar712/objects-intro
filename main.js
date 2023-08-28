const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}
wardrobe.material = "Cedar";
const W = wardrobe;
const everyDetail = `${W.height} ${W.manufacturer} ${W.contents} ${W.depth} ${W.width} ${W.material}`;
console.log('wardrobe info: ' + everyDetail)


const empirgeStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

const E = empirgeStateBuilding;
const everyDimension = `Height: ${E.height} Square Feet: ${E.squareFeet} Stories: ${E.stories} E to W: ${E.eastWestLength} E to S: ${E.northSouthLength}`;
console.log('Empire State Building Dimensions: ' + everyDimension)

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]

    },
    address: "500 Interstate Blvd. S"
}
console.log(nashvilleSoftwareSchool.instructors);
console.log(nashvilleSoftwareSchool.instructors.fullTime[4]);
console.log(nashvilleSoftwareSchool.instructors.partTime[0]);


