import { BindValue, Click, WebzComponent } from "@boots-edu/webz";
import html from "./boop-button.component.html";
import css from "./boop-button.component.css";

export class BoopButtonComponent extends WebzComponent {
    @BindValue("boops")
    private boops: string = "";

    constructor() {
        super(html, css);
    }

    @Click("booper")
    boop() {
        this.boops += "🐱";
    }
}
