import { useNavigation, StackActions } from "@react-navigation/native";

class Navigate {
  constructor(navigation) {
    this.nav = navigation;
  }

  push(name, arg = {}) {
    const pushAction = StackActions.push(name, { data: arg });
    console.log("navigation", this.nav);
    this.nav.dispatch(pushAction);
  }
}

export default Navigate;
