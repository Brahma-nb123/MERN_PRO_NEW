// import allusers from "../../../Backend/controller/allUsers";

const backendDomin = "http://localhost:8080"

const allUserList="https://microsoftedge.github.io/Demos/json-dummy-data/missing-colon.json"

const SummeryApi ={
    signUp : {
        url : `${backendDomin}/api/signup`,
        method : "post"
    },
    signIn : {
        url : `${backendDomin}/api/signin`,
        method : 'post'
    },
    current_user : {
        url : `${backendDomin}/api/user-details`,
        method : 'get'
    },
    logout_ures : {
        url : `${backendDomin}/api/userLogout`,
        method : 'get'
    },
    allusers :{
        url : `${backendDomin}/api/allUsers`,
        method : 'get'
    }
}

export default {SummeryApi,allUserList};

