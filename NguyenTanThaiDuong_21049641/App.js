import { Provider } from "react-redux";
import store from "./store/store";
import AppNavigator from "./navigate/Navigation";
export default function App() {
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    );
}
