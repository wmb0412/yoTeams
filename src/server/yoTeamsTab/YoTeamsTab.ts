import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/yoTeamsTab/index.html")
@PreventIframe("/yoTeamsTab/config.html")
@PreventIframe("/yoTeamsTab/remove.html")
export class YoTeamsTab {
}
