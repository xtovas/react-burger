const priceInitialState = {count: 0};
const priceCounter = (priceState, action) => {
    switch (action.type) {
        case "addition":
            return {count: priceState.count + action.payload};
        case "subtraction": 
            return {count: priceState.count - action.payload};
        default: throw new Error(`Wrong type of action: ${action.type}`);
    }
}
export {priceInitialState, priceCounter}