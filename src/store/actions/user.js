const USER_LOGIN = 'USER_LOGIN';
const userLogin = user => ({
    type: USER_LOGIN,
    user
});

const USER_LOGOUT = 'USER_LOGOUT';
const userLogout = () => ({
    type: USER_LOGOUT,
    user
});

export const handleLogin = ({email, password}) => {
    handleLogin = () => {
             
        
        //firebase.auth() retorna um objeto com alguns métodos de login
        firebase.auth()
            .signInWithEmailAndPassword(email,password)
            .then(loginUserSuccess)
            .catch(err => {
                //Se o usuário digitado não existe cai nesse alert
                if(err.code === 'auth/user-not-found') {
                    Alert.alert(
                        'Usuário não encontrado',
                        'Deseja criar um cadastro com os dados inseridos?',
                        [{
                            text: 'Não',
                            onPress: () => {}
                        }, {
                            text: 'Sim',
                            onPress: () => {
                                firebase.auth()
                                    .createUserWithEmailAndPassword(email, password)
                                    .then(loginUserSuccess)
                                    .catch(loginUserFailed)
                            }
                        
                        }],
                        { cancelable: false }
                    );
                } else {

                    loginUserFailed(err)
                    //this.setState({message: getMessageByErrorCode(err.code)})
                }

            }).then(()=> this.setState({isLoading: false }))

    }
}