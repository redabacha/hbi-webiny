import cliWorkspaces from "@webiny/cli-plugin-workspaces";
import cliPulumiDeploy from "@webiny/cli-plugin-deploy-pulumi";
import cliAwsTemplate from "@webiny/cwp-template-aws/cli";

// Scaffolds.
import cliScaffold from "@webiny/cli-plugin-scaffold";
import cliScaffoldFullStackApp from "@webiny/cli-plugin-scaffold-full-stack-app";
import cliScaffoldGraphQlApi from "@webiny/cli-plugin-scaffold-graphql-api";
import cliScaffoldExtendGraphQlApi from "@webiny/cli-plugin-scaffold-graphql-service";
import cliScaffoldAdminModule from "@webiny/cli-plugin-scaffold-admin-app-module";
import cliScaffoldReactApp from "@webiny/cli-plugin-scaffold-react-app";
import cliScaffoldReactComponent from "@webiny/cli-plugin-scaffold-react-component";
import cliScaffoldCiCd from "@webiny/cli-plugin-scaffold-ci";

// Admin Area CLI plugins.
import adminPlugins from "./apps/admin/cli";

export default {
    template: "@webiny/cwp-template-aws@5.22.1",
    name: "hbi-webiny",
    cli: {
        plugins: [
            cliWorkspaces(),
            cliPulumiDeploy(),
            cliAwsTemplate(),

            // Scaffolds.
            cliScaffold(),
            cliScaffoldFullStackApp(),
            cliScaffoldGraphQlApi(),
            cliScaffoldExtendGraphQlApi(),
            cliScaffoldAdminModule(),
            cliScaffoldReactApp(),
            cliScaffoldReactComponent(),
            cliScaffoldCiCd(),

            // Admin Area CLI plugins.
            adminPlugins
        ]
    }
};
