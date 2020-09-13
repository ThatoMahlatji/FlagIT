
import { createSwitchNavigator } from 'react-navigation';
import AppDrawerNavigator from './AppDrawerNavigator';
import RegisterForm from './RegisterScreen';
import ResetForm from './ResetPassword';
import WelcomeScreen from './WelcomeScreen';



const AppSwitchNavigator = createSwitchNavigator({
    Welcome: WelcomeScreen,
    Dashboard: AppDrawerNavigator,
    Register: RegisterForm,
    Reset: ResetForm,
});


export default AppSwitchNavigator;
