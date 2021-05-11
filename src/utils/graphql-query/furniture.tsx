export const getAllFurnituresByQuery = `
    {
        furnitures {
            id
            furnitureTitle
            furniturer
            price
            filename
        }
    }
`;

export const getFurnitureByQuery = (id: string) => `
    {
        furniture(id: ${id}) {
            id
            furnitureTitle
            furniturer
            year
            country
            furnitureGender
            fragranceTopNotes
            fragranceMiddleNotes
            fragranceBaseNotes
            filename
            price
            volume
            type
            reviews {
                id
                author
                message
                date
            }
        }
    }
`;
