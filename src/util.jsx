
import { redirect } from "react-router-dom";
export  async function redirectAuth() {

    const isLoggedIn = false

    if (!isLoggedIn) {
        return redirect("/login");
    }

}