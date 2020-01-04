import React from 'react';
import { Scene, Router, Lightbox } from 'react-native-router-flux';
import { Image } from 'react-native';




import BooksList from './screens/books';
import Settings from './screens/settings';


const TabIcon = ({ title, focused }) => {
	let icon = null;
	switch (title) {
		case "BOOKS":
			icon = focused ? require("./assets/icon/dashboard_on.png") : require("./assets/icon/dashboard_off.png");
			break;
		case "SETTINGS":
			icon = focused ? require("./assets/icon/settings_on.png") : require("./assets/icon/settings_off.png");
			break;
	}
	return <Image style={{width: 16, height: 16,  margin: 3, resizeMode: 'contain', opacity: focused ? 1.0 : 0.6 }} source={icon} />;
};

class RouterComponent extends React.Component {
    constructor(props){
        super(props);

	}	

    render() {
        return(
            <Router>
                <Lightbox>
					<Scene key="root" panHandlers={null}>
						
               
                	<Scene
				
					key="tabs"
						
							hideNavBar
							tabs={true}
							default="tab1"
							upperCaseLabel
							tabBarStyle={{paddingTop: 5, paddingBottom: 3}}
							labelStyle={{ fontSize: 8, letterSpacing: 1.5, textAlign: 'center',}}
							activeTintColor={'blue'}
							inactiveTintColor={"rgb(142,142,147)"}>
							<Scene hideNavBar title={"BOOKS"} icon={TabIcon}>
								<Scene key="books" component={BooksList} />
							</Scene>
                            <Scene hideNavBar title={"SETTINGS"} icon={TabIcon}>
                            <Scene key="settings" component={Settings} />
							</Scene>
						</Scene> 
					
						
                     </Scene>                   
                </Lightbox>
            </Router>

        );
    }
};

export default RouterComponent;

            