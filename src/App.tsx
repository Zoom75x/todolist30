import {LoginPage} from "@/page";
import {Provider} from "react-redux";
import {store, useAppSelector} from "@/app/store";

export const App = () => {
    const {isAuthorized} = useAppSelector(state => state.userReducer)
    if(!isAuthorized) {
        return <LoginPage/>
    }
    else {
        return <>Наше приложение</>
    }
}

export const AppWrapper = () => {
return <Provider store={store}>
    <App/>
</Provider>
}
