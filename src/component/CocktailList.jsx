import Wrapper from "../Styles/CocktailList";
import SingleCockTail from "../component/SingleCockTail";
const CocktailList = ({ drinks }) => {
    if (!drinks) return <h1>No item Found</h1>;
    return (
        <Wrapper>
            {drinks.map((drink) => {
                const {
                    idDrink: id,
                    strGlass: name,
                    strDrinkThumb: img,
                    strAlcoholic: alcohol,
                    strDrink: category,
                } = drink;
                return (
                    <SingleCockTail
                        key={id}
                        id={id}
                        name={name}
                        alcohol={alcohol}
                        category={category}
                        img={img}
                    />
                );
            })}
        </Wrapper>
    );
};
export default CocktailList;
