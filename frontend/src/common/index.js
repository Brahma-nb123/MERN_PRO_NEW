
const backendDomin = "http://localhost:8080"

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
    }
}

export default SummeryApi;


// http://localhost:8080/api/signup