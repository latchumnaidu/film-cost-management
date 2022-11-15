import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
class CognitoHelper {
  loginWithPassword(userName: string, password: string, scb: any, ercb: any) {
    console.log('inside cognito helper');
    
   console.log({ userName }, { password });
   
    const authenticationData = {
      Username: userName,
      Password: password,
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);
console.log({ authenticationDetails });

    const poolData: any = {
      UserPoolId: 'us-east-1_uo1Pgq1jE', // Your user pool id here
      ClientId: '3ihqle1ifv0pblu4ug334rabqo', // Your client id here
    };
    console.log({ poolData});
    
    const userPool = new CognitoUserPool(poolData);
    console.log({ userPool });
    
    const userData = {
      Username: userName,
      Pool: userPool,
    };

    const cognitoUser = new CognitoUser(userData);
    console.log({ cognitoUser });
    
    //this._loginInstance = cognitoUser;
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: scb,
      newPasswordRequired: function (userAttributes, requiredAttributes) {
        console.log("New Password:", authenticationData.Password);
        cognitoUser.completeNewPasswordChallenge(
          authenticationData.Password,
          {},
          this
        );
      },
      onFailure: ercb,
    });
    return;
  }
}
export const cognitoHelperInstance = new CognitoHelper();