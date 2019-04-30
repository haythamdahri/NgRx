import { User } from "./models/user.model";
import { Tutorial } from "./models/tutorial.model";


// Let's export an interface named AppState with a readonly property of type Tutorial[]
export interface AppState {
    readonly tutorial: Tutorial[];

    //? To demonstrate, we will have an other model of user. Therefore we need to export an other readonly user[] property
    readonly  user: User[];
}