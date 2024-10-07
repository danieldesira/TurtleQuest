import ThirdParty, {
  Github,
  Google,
  Facebook,
  Apple,
} from "supertokens-auth-react/recipe/thirdparty";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";
import { ThirdPartyPreBuiltUI } from "supertokens-auth-react/recipe/thirdparty/prebuiltui";
import { EmailPasswordPreBuiltUI } from "supertokens-auth-react/recipe/emailpassword/prebuiltui";

export const SuperTokensConfig = {
  appInfo: {
    // learn more about this on https://supertokens.com/docs/thirdpartyemailpassword/appinfo
    appName: "Turtle Quest",
    apiDomain: "http://localhost:3000",
    websiteDomain: "http://localhost:5000",
    apiBasePath: "/auth",
    websiteBasePath: "/auth",
  },
  recipeList: [
    ThirdParty.init({
      signInAndUpFeature: {
        providers: [
          Github.init(),
          Google.init(),
          Facebook.init(),
          Apple.init(),
        ],
      },
    }),
    EmailPassword.init(),
    Session.init(),
  ],
};

export const PreBuiltUIList = [ThirdPartyPreBuiltUI, EmailPasswordPreBuiltUI];
