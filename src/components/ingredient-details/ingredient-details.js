import DetailsStyles from "./ingredient-details.module.css";
import { FoodPropTypes } from "../../utils/data";

export default function IngredientDetails(props) {
  return (
    <div className={DetailsStyles.detailContainer}>
      <h1 className={`${DetailsStyles.ingredient} text text_type_main-large`}>
        Детали ингредиента
      </h1>
      <div className={DetailsStyles.imageContainer}>
        <img
          className={DetailsStyles.image}
          src={props.item.image_large}
          alt={props.item.name}
        />
      </div>
      <p className={`${DetailsStyles.caption} text text_type_main-medium`}>
        {props.item.name}
      </p>
      <div
        className={`${DetailsStyles.ingredientTable} text text_type_main-small text_color_inactive`}
      >
        <div className={DetailsStyles.table}>
          <p
            className={`${DetailsStyles.ingredientTitle} text text_type_main-default text_color_inactive`}
          >
            Калории,ккал
          </p>
          <p className="text text_type_digits-default">{props.item.calories}</p>
        </div>
        <div className={DetailsStyles.table}>
          <p
            className={`${DetailsStyles.ingredientTitle} text text_type_main-default text_color_inactive`}
          >
            Белки, г
          </p>
          <p className="text text_type_digits-default">{props.item.proteins}</p>
        </div>
        <div className={DetailsStyles.table}>
          <p
            className={`${DetailsStyles.ingredientTitle} text text_type_main-default text_color_inactive`}
          >
            Жиры, г
          </p>
          <p className="text text_type_digits-default">{props.item.fat}</p>
        </div>
        <div className={DetailsStyles.table}>
          <p
            className={`${DetailsStyles.ingredientTitle} text text_type_main-default text_color_inactive`}
          >
            Углеводы, г
          </p>
          <p className="text text_type_digits-default">
            {props.item.carbohydrates}
          </p>
        </div>
      </div>
    </div>
  );
}

IngredientDetails.propTypes = {
  item: FoodPropTypes.isRequired,
};
