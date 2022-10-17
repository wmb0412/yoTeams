import * as React from "react";
import { useEffect } from "react";

/**
 * Implementation of the yoTeams Tab content page
 */
export const YoTeamsTab = () => {
    /**
     * The render() method to create the UI of the tab
     */
    useEffect(() => {
        window.location.href = "https://login.microsoftonline.com/fd26d0e3-83a5-4af4-be3d-ad6db612a062/oauth2/v2.0/authorize?response_type=code&response_mode=query&state=SCAN&scope=directory.read.all&client_id=574e3787-04ae-46f6-9afb-813cd0134f6c&redirect_uri=https%3A%2F%2Fchinabi.wuselingzhi.cn%2Fsso%2Flogin%2Fazure%2Fguanbi";
        // window.location.href = "https://login.microsoftonline.com/8d51b8af-89ba-4658-9097-b5eeec6c0bd0/oauth2/v2.0/authorize?response_type=code&response_mode=query&state=SCAN&scope=directory.read.all&client_id=3d01ce90-6e14-4daf-80da-cfc7b156a2c9&redirect_uri=https%3A%2F%2Fapp.mayidata.com%2Fsso%2Flogin%2Fazure%2Fdemo"
    }, []);
    return (
        <div></div>
    );
};
